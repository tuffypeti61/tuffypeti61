
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