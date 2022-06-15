import Typed from 'typed.js'

const handleTyped = config => {
    const tag = document.querySelector('.vdoing-index-class .home .hero')
    if (!tag) throw Error('打字指定的Selector错误tag =>' + tag)
    const id = 'typed-' + Math.random().toString(36).replace(/0./, '')
    const tagValue = tag.innerText || tag.innerHTML
    
    tag.innerHTML = `<span class='${id}' style="font-size: ${config.fontSize || '1.6rem'}">${tagValue}</span>`
    new Typed('.' + id, {
        ...config,
        strings: [''].concat(config.strings), //输入内容, 支持html标签
        typeSpeed: config.typeSpeed || 100, //打字速度
        backSpeed: config.backSpeed || 200, //回退速度
        loop: config.loop ?? true
    })
    const cursor = document.querySelector('.typed-cursor')
    cursor && (cursor.style.cssText = `font-size: ${config.fontSize || '1.6rem'}`)
}
// const visibilitychange = () => {
//     document.addEventListener('visibilitychange', this.handleVisiable)
//     function handleVisiable() {
//         if (e.target.visibilityState == 'visible') {
//             console.log('当前tab标签')
//         } else {
//             console.log('离开当前tab标签')
//         }
//     }
// }

export { handleTyped }
