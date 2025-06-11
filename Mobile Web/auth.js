// 使用 localStorage 实现用户系统
let users = JSON.parse(localStorage.getItem('users') || '{}');

function handleRegister() {
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;
  
  if (users[username]) {
    alert('用户名已存在');
    return;
  }
  
  users[username] = { password };
  localStorage.setItem('users', JSON.stringify(users));
  alert('注册成功');
  window.location.reload();
}

function handleLogin() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  
  if (users[username]?.password === password) {
    localStorage.setItem('currentUser', username);
    alert('登录成功');
    window.location.reload();
  } else {
    alert('用户名或密码错误');
  }
}

// 处理信息修改
function handleEdit() {
    // ... existing handleEdit 代码 ...
}