import html2canvas from 'html2canvas'

export async function exportToImage(
  element: HTMLElement,
  layout: 'horizontal' | 'vertical'
) {
  const canvas = await html2canvas(element, {
    backgroundColor: 'transparent',
    scale: 2, // 提高导出图片质量
  })

  let imageData = canvas.toDataURL('image/png')
  
  // 创建一个临时的 canvas 元素来处理图片旋转（如果是竖版布局）
  if (layout === 'vertical') {
    const tempCanvas = document.createElement('canvas')
    const ctx = tempCanvas.getContext('2d')
    if (!ctx) return

    // 交换宽高
    tempCanvas.width = canvas.width
    tempCanvas.height = canvas.height

    // 直接绘制，不需要旋转，因为预览区域已经是竖版了
    ctx.drawImage(canvas, 0, 0)

    imageData = tempCanvas.toDataURL('image/png')
  }

  // 创建一个临时的 img 元素
  const img = document.createElement('img')
  img.src = imageData

  // 等待图片加载完成
  await new Promise((resolve) => {
    img.onload = resolve
  })

  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        'image/png': await fetch(imageData).then(r => r.blob())
      })
    ])
    alert('图片已复制到剪贴板！')
  } catch (err) {
    console.error('复制到剪贴板失败:', err)
    // 如果复制失败，提供下载链接
    const link = document.createElement('a')
    link.download = 'exported-text.png'
    link.href = imageData
    link.click()
  }
} 