// 初始化用户数据
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify({}));
}

// 检查登录状态
function checkLoginStatus() {
    const currentUser = localStorage.getItem('currentUser');
    const welcomeText = document.getElementById('welcomeText');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    const changeNicknameBtn = document.getElementById('changeNicknameBtn');

    if (currentUser) {
        const userData = JSON.parse(localStorage.getItem('users'))[currentUser];
        welcomeText.textContent = `欢迎您，${userData.nickname || currentUser}`;
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        changeAvatarBtn.style.display = 'block';
        changeNicknameBtn.style.display = 'block';
    } else {
        welcomeText.textContent = '欢迎您，游客';
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        changeAvatarBtn.style.display = 'none';
        changeNicknameBtn.style.display = 'none';
    }
}

// 控制头像面板展开/关闭的交互逻辑
const avatar = document.getElementById('avatar');
const avatarPanel = document.getElementById('avatarPanel');

avatar.addEventListener('click', () => {
    avatarPanel.classList.toggle('active');
    checkLoginStatus();
});

// 添加控制左侧菜单展开/关闭的交互逻辑
const toggleBtn = document.getElementById('toggleBtn');
const menuPanel = document.getElementById('menuPanel');

// 原错误：oggleBtn（缺少't'）→ 修正为 toggleBtn
toggleBtn.addEventListener('click', () => {
    menuPanel.classList.toggle('active');
});

// 点击页面其他区域关闭头像面板
document.addEventListener('click', (e) => {
    if (!avatar.contains(e.target) && !avatarPanel.contains(e.target)) {
        avatarPanel.classList.remove('active');
    }
    // 点击页面其他区域关闭左侧菜单
    if (!toggleBtn.contains(e.target) && !menuPanel.contains(e.target)) {
        menuPanel.classList.remove('active');
    }
});

// 显示模态框
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
}

// 关闭模态框
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}

// 登录按钮点击事件
document.getElementById('loginBtn').addEventListener('click', () => {
    showModal('loginModal');
});

// 注册按钮点击事件
document.getElementById('registerBtn').addEventListener('click', () => {
    showModal('registerModal');
});

// 注销登录
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    checkLoginStatus();
});

// 更改头像按钮点击事件
document.getElementById('changeAvatarBtn').addEventListener('click', () => {
    showModal('editModal');
});

// 更改昵称按钮点击事件
document.getElementById('changeNicknameBtn').addEventListener('click', () => {
    showModal('editModal');
});

// 处理注册
function handleRegister() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const users = JSON.parse(localStorage.getItem('users'));

    if (users[username]) {
        alert('用户名已存在');
        return;
    }

    users[username] = {
        password: password,
        nickname: username,
        avatar: 'https://via.placeholder.com/40'
    };

    localStorage.setItem('users', JSON.stringify(users));
    alert('注册成功，请登录');
    closeModal('registerModal');
}

// 处理登录
function handleLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const users = JSON.parse(localStorage.getItem('users'));

    if (users[username] && users[username].password === password) {
        localStorage.setItem('currentUser', username);
        checkLoginStatus();
        closeModal('loginModal');
    } else {
        alert('用户名或密码错误');
    }
}

// 处理信息修改
function handleEdit() {
    const currentUser = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users'));
    const newNickname = document.getElementById('newNickname').value;
    const newAvatar = document.getElementById('newAvatar').files[0];

    if (newNickname) {
        users[currentUser].nickname = newNickname;
    }

    if (newAvatar) {
        const reader = new FileReader();
        reader.onload = function(e) {
            users[currentUser].avatar = e.target.result;
            localStorage.setItem('users', JSON.stringify(users));
            document.getElementById('avatar').src = e.target.result;
        };
        reader.readAsDataURL(newAvatar);
    }

    localStorage.setItem('users', JSON.stringify(users));
    checkLoginStatus();
    closeModal('editModal');
}

// 初始化检查登录状态
checkLoginStatus();

// 切换板块逻辑
const tabItems = document.querySelectorAll('.tab-item');
tabItems.forEach((tab) => {
    tab.addEventListener('click', () => {
        // 移除所有 tab 的 active 类
        tabItems.forEach((t) => t.classList.remove('active'));
        // 给当前点击的 tab 添加 active 类
        tab.classList.add('active');

        const target = tab.dataset.target;
        const contentItems = document.querySelectorAll('.content-item');
        contentItems.forEach((item) => {
            if (item.id === target) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});