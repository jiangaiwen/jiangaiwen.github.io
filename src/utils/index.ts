import path from 'path-browserify'

export function resolveRoutePath(basePath?: string, routePath?: string) {
    return basePath ? path.resolve(basePath, routePath ?? '') : routePath ?? ''
}

export const generateId = () => {
    return Math.floor(Math.random() * 100000 + Math.random() * 20000 + Math.random() * 5000);
};

/**
 * 根据当前时间生成问候语
 */
export function getGreet() {
    const time = new Date()
    const hour = time.getHours()
    let greet = ''

    if (hour < 5) {
        greet = '夜深了，注意身体哦！'
    } else if (hour < 9) {
        greet = '早上好！欢迎回来！'
    } else if (hour < 12) {
        greet = '上午好！欢迎回来！'
    } else if (hour < 14) {
        greet = '中午好！欢迎回来！'
    } else if (hour < 18) {
        greet = '下午好！欢迎回来！'
    } else if (hour < 24) {
        greet = '晚上好！欢迎回来！'
    } else {
        greet = '您好！欢迎回来！'
    }
    return greet
}

export const getColor = () => {
    var str = '#'
    var arr = ['1', '2', '3', '4', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    for (var i = 0; i < 6; i++) {
        var num = parseInt(Math.random() * 16)
        str += arr[num]
    }
    return str
}
/**
 * 生成范围内的随机数
 * @param min 最小值
 * @param max 最大值
 * @param isFloat 是否包含小数点
 * @returns number
 */
export const random = (min = 0, max = 100, isFloat = false) => {
    const array = new Uint32Array(1);
    const maxUint = 0xffffffff;
    const randomNumber = crypto.getRandomValues(array)[0] / maxUint;
    const randomRangeValue = (max - min + 1) * randomNumber + min;
    return isFloat ? randomRangeValue : Math.floor(randomRangeValue);
};

/**
 * 计算最大运行轨道
 * @param x 轨道坐标x
 * @param y 轨道坐标y
 * @returns 最大的运行轨道坐标
 */
export const maxOrbit = (x: number, y: number) => {
    const max = Math.max(x, y);
    const diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
};

/**
 * 随机生成16进制
 */
export const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

/**
 * RGB转16进制
 */
export const rgbToHex = (r: number, g: number, b: number) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// rgbToHex(0, 51, 255);// Result: #0033ff`

/**
 * 计算两天之间相差天数
 */ 
export const dayDif = (date1: any, date2: any) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
// dayDif(new Date("2020-10-21"), new Date("2021-10-22"))

/**
 * 字符串首字母大写
 */
export const capitalize = (str: any) => str.charAt(0).toUpperCase() + str.slice(1)

