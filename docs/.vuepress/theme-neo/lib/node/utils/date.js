// 小于10补0
export function addZero(d, len = 2) {
    return d.toString().padStart(len, '0')
}

// 修复date时区格式的问题
export function repairDate(date) {
    date = new Date(date)
    return `${date.getUTCFullYear()}-${addZero(date.getUTCMonth() + 1)}-${addZero(date.getUTCDate())} ${addZero(date.getUTCHours())}:${addZero(date.getUTCMinutes())}:${addZero(date.getUTCSeconds())}`
}

// 日期的格式
export function dateFormat(date) {
    return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
}
