document.getElementById('menuButton').addEventListener('click', function() {
    var menuItems = document.getElementById('menuItems');
    menuItems.classList.toggle('hidden');
});

document.getElementById('closeButton').addEventListener('click', function() {
    var menuItems = document.getElementById('menuItems');
    menuItems.classList.add('hidden');
});


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    function switchTab(activeIndex) {
        buttons.forEach((button, index) => {
            if (index === activeIndex) {
                button.classList.add('active-tab');
                button.querySelector('.tab-icon').textContent = '-';
                contents[index].classList.remove('hidden');
            } else {
                button.classList.remove('active-tab');
                button.querySelector('.tab-icon').textContent = '+';
                contents[index].classList.add('hidden');
            }
        });
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            switchTab(index);
        });
    });

    switchTab(0);
});
