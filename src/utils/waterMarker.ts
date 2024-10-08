function waterMarker (options: any) {
    const {
        container = document.body, // 容器
        width = '200', // canvas元素宽
        height = '100', // canvas元素高
        textAlign = 'left', // 文字对齐
        textBaseline = 'bottom', // 基准线
        font = '16px Microsoft Yahei', // 字体大小及样式
        fillStyle = '#000', // 自定义水印的颜色
        content = 'Vue3 Admin', // 水印内容
        globalAlpha = 0.3, // 设置图形和图像透明度的值
        rotate = 16, // 文字旋转角度
        zIndex = 1000, // 元素堆叠顺序
    } = options

    const dpr = window.devicePixelRatio;
    const canvas = document.createElement('canvas')
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    canvas.setAttribute('width', dpr*width)
    canvas.setAttribute('height', dpr*height)
    const ctx = canvas.getContext('2d') // 获取 canvas2d 上下文
    ctx.globalAlpha = globalAlpha
    ctx.textAlign = textAlign
    ctx.textBaseline = textBaseline
    ctx.font = font
    ctx.fillStyle = fillStyle
    ctx.rotate((Math.PI * rotate) / 180)
    // ctx.rotate(-10 * Math.PI / 140);
    ctx.fillText(content, parseFloat(width) / 2 * dpr, parseFloat(height) / 2 * dpr)
    // ctx.scale(dpr, dpr)
    const base64Url = canvas.toDataURL() // 返回一个包含图片展示的 data URI

    const __wm = document.querySelector('.__wm')// 选择器
    const watermarkDiv = __wm || document.createElement('div')
    const styleStr = `
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        height:100%;
        z-index:${zIndex};
        pointer-events:none;
        background-repeat:repeat;
        background-image:url('${base64Url}');`

    watermarkDiv.setAttribute('style', styleStr)
    watermarkDiv.classList.add('__wm') // 为元素添加“__wm”类名

    container.style.position = 'relative'
    container.appendChild(watermarkDiv) // 添加元素
}

export default waterMarker