#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

module.exports = fn

function fn(dirName, fileName, distDir) {
  return new Promise((resolve, reject) => {
    let mdString = ''

    let depth = 0

    let exported = false

    let outputFileName = fileName.endsWith('.md') ? fileName : `${fileName}.md`

    let searchPath = path.resolve(dirName || './')

    const folders = {}

    const directoryList = searchPath.split('/')

    const startFolder = directoryList[directoryList.length - 1]

    const startDepth = directoryList.length - 1

    const dist = path.resolve(distDir || process.cwd())

    const folderIgnoreList = ['.git', 'node_modules']

    getFolders(searchPath)

    function getFolders(path) {

      fs.readdir(path, function(err, list) {
        if (err) return err

        list.forEach(function(item) {
          if (
            fs.lstatSync(path + '/' + item).isDirectory() &&
            !folderIgnoreList.includes(item)
          ) {
            let folderDepth = path.split('/').length

            if (folderDepth > depth) {
              depth = folderDepth
            }

            let uniqueKey = path + '/' + item.replace(/\//g, '')

            folders[uniqueKey] = {
              depth: folderDepth,
              parentFolder: path,
              path: path + '/' + item,
              name: item,
              folders: [],
              files: [],
              logged: false,
              parsed: false,
              marked: false
            }

            getFolders(path + '/' + item, true)
          }
        })

        getFilesInFolders()
      })

      folders[searchPath] = {
        depth: searchPath.split('/').length - 1,
        parentFolder: null,
        path: searchPath,
        name: searchPath.split('/')[searchPath.split('/').length - 1],
        folders: [],
        files: [],
        logged: false,
        parsed: false,
        marked: false
      }

      fs.readdir(searchPath, function(err, list) {
        list.forEach(function(item) {
          if (!fs.lstatSync(searchPath + '/' + item).isDirectory()) {
            if (!folders[searchPath].files.includes(item)) {
              folders[searchPath].files.push(item)
            }
          }
        })

        folders[searchPath].parsed = true
      })
    }
    function getFiles(path, key) {
      fs.readdir(path, function(err, list) {
        list.forEach(function(item) {
          if (!fs.lstatSync(path + '/' + item).isDirectory()) {
            if (
              folders[key].files.length === 0 ||
              !folders[key].files.includes(item)
            ) {
              folders[key].files.push(item)
            }
          } else {
            if (!folders[key].folders.includes(item)) {
              folders[key].folders.push(item)
            }
          }
        })
        folders[key].parsed = true

        listFolders()
      })
    }
    
    function getFilesInFolders() {
      for (let key in folders) {
        if (folders.hasOwnProperty(key)) {
          getFiles(folders[key].path, key)
        }
      }
    }
    
    function listFolders() {
      let allParsed = true

      for (let key in folders) {
        if (folders.hasOwnProperty(key)) {
          if (!folders[key].logged || !folders[key].parsed) {
            allParsed = false
          }
          if (folders[key].parsed && !folders[key].logged) {
            folders[key].logged = true
            // console.log(JSON.stringify(folders[key],null,2))
          }
        }
      }

      if (allParsed && !exported) {
        exported = true

        generateMarkdown()
        // console.log(JSON.stringify(folders, null, 2))
      }
    }
    
    function addFileName(name, indent) {
      mdString += generateBlank(indent + 4) + '|-- ' + name + '\n'
    }
    
    // 生成指定长度空字符串
    function generateBlank(len) {
      return Array(len)
        .fill(' ')
        .join('')
    }
    
    function addFolderName(name, root) {
      if (folders[name] !== undefined) {
        if (folders[name].marked) {
          return
        }
        let indent = (folders[name].depth - startDepth) * 4
    
        mdString += generateBlank(indent)
    
        if (root) {
          mdString += '|-- ' + startFolder + '\n'
        } else {
          mdString += '|-- ' + folders[name].name + '\n'
        }

        folders[name].files.forEach(function(f) {
          addFileName(f, indent)
        })

        folders[name].marked = true

        folders[name].folders.forEach(function(f) {
          let path = name + '/' + f

          addFolderName(path)
        })
      }
    }
    
    async function generateMarkdown() {
      addFolderName(searchPath, true)
    
      addSiblingfolderConnections()
    
      mdString =
        '``` js \n' + mdString + '\n' + '```'

      try {
        await fs.writeFile(
          dist + '/' + outputFileName,
          mdString,
          function(err) {
            if (err) return
          }
        )

        resolve()
      } catch (e) {
        reject(e)
      }
    }
    
    String.prototype.replaceAt = function(index, character) {
      return (
        this.substr(0, index) + character + this.substr(index + character.length)
      )
    }
    
    function addSiblingfolderConnections() {
      // 填充 |
      let lines = mdString.split('\n')
    
      for (let i = 1; i < lines.length; i++) {
        let line1 = lines[i - 1]

        let line2 = lines[i]

        for (let j = 0; j < line2.length; j++) {
          let char1 = line1.charAt(j)

          let char2 = line2.charAt(j)

          let foundSibling = false

          for (let k = i; k < lines.length; k++) {
            let charBelow = lines[k].charAt(j)

            if (charBelow !== '|' && charBelow !== ' ') {
              break
            }

            if (charBelow === '|') {
              foundSibling = true
            }
          }

          if (foundSibling && char1 === '|' && char2 === ' ') {
            line2 = line2.replaceAt(j, '|')

            lines[i] = line2
          }
        }
      }

      mdString = lines.join('\n')
    }
  })
}