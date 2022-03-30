var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');

function navbarActive1(id) {
    if (nav1.classList.contains('active') === false) {
        if (nav2.classList.contains('active') ||
            nav3.classList.contains('active')
        ) {
            nav2.classList.remove('active')
            nav3.classList.remove('active')
            nav1.classList.add('active')
        }
    } else {
        nav1.classList.add('active')
    }
}

function navbarActive2(id) {
    if (nav2.classList.contains('active') === false) {
        if (nav1.classList.contains('active') ||
            nav3.classList.contains('active') ||
            window.pageYOffset == 260
        ) {
            nav1.classList.remove('active')
            nav3.classList.remove('active')
            nav2.classList.add('active')
        }
    } else {
        nav2.classList.add('active')
    }
}

function navbarActive3(id) {
    if (nav3.classList.contains('active') === false) {
        if (nav1.classList.contains('active') ||
            nav2.classList.contains('active')
        ) {
            nav1.classList.remove('active')
            nav2.classList.remove('active')
            nav3.classList.add('active')
        }
    } else {
        nav3.classList.add('active')
    }
}