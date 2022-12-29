#!/usr/bin/env node

const inquirer = require("inquirer")

const path = require('path')

const chalk = require("chalk")

const fn = require('../lib')

const log = console.log

const loading =  require('loading-cli');
const load = loading('正在扫描目录, 请稍等...')


const PROJECT_CONFIG = require("../config")

inquirer.prompt(PROJECT_CONFIG).then(config => {
  const { dirName, fileName } = config

  log(chalk.green('\n'))
  load.color = 'green'

  load.start()

  setTimeout(() => {
    fn(dirName, fileName)
    .then(() => {
      load.stop()
      log(chalk.green(`Success：[文件: ${fileName}] 生成成功`, '\n'))
      log(chalk.green(`请到目录 ${path.resolve(dirName)} 下查看`, '\n'))
    })
    .catch(e => {
      load.color = 'red'
      load.text = '文件扫描失败...'
      log(chalk.red(`[文件: ${fileName}]写入失败，请重试！`))
      log(chalk.red(`Error: ${e}`, '\n'))
    })
  }, 1000)
})
