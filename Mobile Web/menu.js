// 初始化用户数据
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify({}));
}

// 检查登录状态
function checkLoginStatus() {
    // ... existing checkLoginStatus 代码 ...
}

// 控制头像面板展开/关闭的交互逻辑
const avatar = document.getElementById('avatar');
const avatarPanel = document.getElementById('avatarPanel');
avatar.addEventListener('click', () => {
    avatarPanel.classList.toggle('active');
    checkLoginStatus();
});

// 控制左侧菜单展开/关闭的交互逻辑（已修正拼写错误）
const toggleBtn = document.getElementById('toggleBtn');
const menuPanel = document.getElementById('menuPanel');
toggleBtn.addEventListener('click', () => {
    menuPanel.classList.toggle('active');
});

// 点击页面其他区域关闭面板
document.addEventListener('click', (e) => {
    // ... existing 点击关闭逻辑 ...
});