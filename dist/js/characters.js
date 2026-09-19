// 选择页面中的所有角色图片元素，并将其存储在变量 'images' 中
const images = document.querySelectorAll('.carousel img');

// 选择角色信息展示区域中的 <p> 标签，用于显示点击的角色信息
const info = document.querySelector('.character-info p');

// 遍历每一个角色图片元素
images.forEach(img => {
    // 为每个图片元素添加点击事件监听器
    img.addEventListener('click', () => {
        // 当图片被点击时，获取图片的 'data-info' 属性的值
        // 并将该值设置为信息展示区域的文本内容
        info.textContent = img.getAttribute('data-info');
    });
});

