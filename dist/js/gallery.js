document.addEventListener('DOMContentLoaded', () => { // 页面内容加载完毕后执行以下函数
    const galleryContainer = document.querySelector('.gallery-container'); // 获取图片展示区的容器
    const imagePaths = Array.from({ length: 51 }, (_, i) => `image2/i${i + 1}.jpg`); // 生成包含51个图片路径的数组
    
    imagePaths.forEach((path, index) => { // 遍历图片路径数组
        const galleryItem = document.createElement('div'); // 创建一个新的 div 元素用于展示图片
        galleryItem.classList.add('gallery-item'); // 为新创建的 div 添加 class
        galleryItem.innerHTML = `<img src="${path}" alt="图片${index + 1}" onclick="openModal(this)">`; // 设置 div 的内部 HTML 包含图片元素和点击事件
        galleryContainer.appendChild(galleryItem); // 将图片 div 添加到展示区容器中
    });
});

function openModal(element) { // 定义一个函数，当图片被点击时打开模态框
    const modal = document.getElementById('imageModal'); // 获取模态框元素
    const modalImg = document.getElementById('modalImage'); // 获取模态框中的图片元素
    const captionText = document.getElementById('caption'); // 获取模态框中的标题元素
    const downloadLink = document.getElementById('downloadLink'); // 获取模态框中的下载链接元素

    modal.style.display = "block"; // 显示模态框
    modalImg.src = element.src; // 设置模态框中的图片源为被点击图片的源
    captionText.innerHTML = element.alt; // 设置模态框中的标题为被点击图片的 alt 属性
    downloadLink.href = element.src; // 设置下载链接为被点击图片的源
}

function closeModal() { // 定义一个函数，当点击模态框关闭按钮时关闭模态框
    const modal = document.getElementById('imageModal'); // 获取模态框元素
    modal.style.display = "none"; // 隐藏模态框
}
