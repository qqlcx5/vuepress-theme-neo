function mapTocToSidebar(root, collapsable, prefix = '') {
  let sidebar = []; // 结构化文章侧边栏数据
  const files = fs.readdirSync(root); // 读取目录（文件和文件夹）,返回数组

  files.forEach(filename => {
    const file = path.resolve(root, filename); // 方法：将路径或路径片段的序列解析为绝对路径
    const stat = fs.statSync(file); // 文件信息
    if (filename === '.DS_Store') { // 过滤.DS_Store文件
      return
    }
    // let [order, title, type] = filename.split('.');

    const fileNameArr = filename.split('.')
    const isDir = stat.isDirectory()
    let order = '', title = '', type = '';
    if (fileNameArr.length === 2) {
      order = fileNameArr[0];
      title = fileNameArr[1];
    } else {
      const firstDotIndex = filename.indexOf('.');
      const lastDotIndex = filename.lastIndexOf('.');
      order = filename.substring(0, firstDotIndex);
      type = filename.substring(lastDotIndex + 1);
      if (isDir) {
        title = filename.substring(firstDotIndex + 1);
      } else {
        title = filename.substring(firstDotIndex + 1, lastDotIndex);
      }
    }

    order = parseInt(order, 10);
    if (isNaN(order) || order < 0) {
      log(chalk.yellow(`warning: 该文件 "${file}" 序号出错，请填写正确的序号`))
      return;
    }
    if (sidebar[order]) { // 判断序号是否已经存在
      log(chalk.yellow(`warning: 该文件 "${file}" 的序号在同一级别中重复出现，将会被覆盖`))
    }
    if (isDir) { // 是文件夹目录
      sidebar[order] = {
        title,
        collapsable, // 是否可折叠，默认true
        children: mapTocToSidebar(file, collapsable, prefix + filename + '/').sidebar // 子栏路径添加前缀
      }
    } else { // 是文件
      if (type !== 'md') {
        log(chalk.yellow(`warning: 该文件 "${file}" 非.md格式文件，不支持该文件类型`))
        return;
      }
      const contentStr = fs.readFileSync(file, 'utf8') // 读取md文件内容，返回字符串
      const { data } = matter(contentStr, {}) // 解析出front matter数据
      const { permalink = '', titleTag = '' } = data || {}

      // 目录页对应的永久链接，用于给面包屑提供链接
      const { pageComponent } = data
      if (pageComponent && pageComponent.name === "Catalogue") {
        catalogueData[title] = permalink
      }

      if (data.title) {
        title = data.title
      }
      const item = [prefix + filename, title, permalink]
      if (titleTag) item.push(titleTag)
      sidebar[order] = item;  // [<路径>, <标题>, <永久链接>, <?标题标签>]

    }
  })

  sidebar = sidebar.filter(item => item !== null && item !== undefined);
  return {
    sidebar,
    catalogueData
  };
}