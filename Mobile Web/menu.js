// 初始化用户数据
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify({}));
}

// 检查登录状态
function checkLoginStatus() {
    // ... existing checkLoginStatus 代码 ...
}

// 控制头像面板展开/关闭的交互逻辑
// 头像面板交互
const avatar = document.getElementById('avatar');
const avatarPanel = document.getElementById('avatarPanel');

if (avatar && avatarPanel) {
    avatar.addEventListener('click', () => {
        avatarPanel.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!avatar.contains(e.target) && !avatarPanel.contains(e.target)) {
            avatarPanel.classList.remove('show');
        }
    });
}

// 控制左侧菜单展开/关闭的交互逻辑（已修正拼写错误）
// 获取元素
const toggleBtn = document.getElementById('toggleBtn');
const menuPanel = document.getElementById('menuPanel');
const modalOverlay = document.getElementById('modalOverlay');

// 显示抽屉
function showMenu() {
    menuPanel.classList.add('show');
    modalOverlay.classList.add('show');
}

// 隐藏抽屉
function hideMenu() {
    menuPanel.classList.remove('show');
    modalOverlay.classList.remove('show');
}

// 为更多按钮添加点击事件
toggleBtn.addEventListener('click', showMenu);

// 为遮罩层添加点击事件，点击遮罩层隐藏抽屉
modalOverlay.addEventListener('click', hideMenu);

// 点击页面其他区域关闭面板
document.addEventListener('click', (e) => {
    // ... existing 点击关闭逻辑 ...
});

// 响应式侧边栏
const sidebar = document.getElementById('sidebar');
const toggleSidebarButton = document.getElementById('toggleSidebar');

function toggleSidebar() {
    sidebar.classList.toggle('active');
}

if (toggleSidebarButton) {
    toggleSidebarButton.addEventListener('click', toggleSidebar);
}

// 移动端手势支持
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
        // 右滑打开侧边栏
        sidebar.classList.add('active');
    } else if (deltaX < -50) {
        // 左滑关闭侧边栏
        sidebar.classList.remove('active');
    }
});