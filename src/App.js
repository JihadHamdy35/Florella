import React from 'react';
import './App.css';
import root from './index.js';
import favourite from './images/favourite.png';
import cart from './images/cart.png';
import user from './images/user.png';
import menu from './images/menu.png';
import red_favourite from './images/favourite_red.png';
import red_cart from './images/cart_red.png';
import red_user from './images/user_red.png';
import closeMenu from './images/close.png';
window.onresize = () => {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
/// ---------------- -- Header -------------------- ///
function changeColor(ele) {
    ele = document.querySelectorAll(`header ul li a img`)[ele];
    let src = ele.getAttribute('src');
    if (src === red_favourite) {
        src = favourite;
    } else if (src === red_cart) {
        src = cart;
    } else if (src === red_user) {
        src = user;
    }
    else if (src === favourite) {
        src = red_favourite;
    } else if (src === cart) {
        src = red_cart;
    } else if (src === user) {
        src = red_user;
    }
    ele.setAttribute('src', src);
}
function Header() {
    if (window.innerWidth < 800) {
        return (
            <React.StrictMode>
                <header>
                    <HeaderList />
                    <MenuList />
                    <div className='logo'>
                        <span>Florella</span><span className='dot'>.</span>
                    </div>
                    <IconsList />
                </header>
            </React.StrictMode>
        )
    }
    return (
        <React.StrictMode>
            <header>
                <div className='logo'>
                    <span>Florella</span><span className='dot'>.</span>
                </div>
                <HeaderList />
                <IconsList />
            </header>
        </React.StrictMode>
    )
}
function HeaderList() {
    return (
        <div className='header-list'>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#About'>About</a></li>
                <li><a href='#Products'>Products</a></li>
                <li><a href='#Review'>Review</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>
        </div>
    )
}
function MenuList() {
    return (
        <div className='menu'>
            <img
                src={menu}
                alt='menu'
                onClick={function () {
                    let ele = document.querySelector('header .header-list ul');
                    ele.classList.toggle('active');
                    let ele2 = document.querySelector('header .menu img');
                    if (ele.classList.contains('active')) {
                        ele.style.height = '15em';
                        ele2.setAttribute('src', closeMenu);
                        ele2.style.animation = 'rotate-left 0.5s ease-in-out';
                    } else {
                        ele.style.height = '0em';
                        ele2.setAttribute('src', menu);
                        ele2.style.animation = 'rotate-right 0.5s ease-in-out';
                    }
                }} />
        </div>
    )
}
function IconsList() {
    return (
        <ul>
            <li>
                <a href='./favourites.html'>
                    <img src={favourite}
                        alt='favourite'
                        className='favourite'
                        onMouseEnter={function () { changeColor(0) }}
                        onMouseLeave={function () { changeColor(0) }} />
                </a>
            </li>
            <li>
                <a href='./cart.html'>
                    <img
                        src={cart}
                        alt='cart'
                        className='cart'
                        onMouseEnter={function () { changeColor(1) }}
                        onMouseLeave={function () { changeColor(1) }} />
                </a>
            </li>
            <li>
                <a href='./user.html'>
                    <img
                        src={user}
                        alt='User'
                        className='user'
                        onMouseEnter={function () { changeColor(2) }}
                        onMouseLeave={function () { changeColor(2) }} />
                </a>
            </li>
        </ul>
    )
}
/// ------------------ Home Page -------------------- ///
function HomePage() {
    return (
        <div id='home'>
            <div className='left-side'>
                <h1>Fresh Flowers</h1>
                <span>Natural & Beautiful Flowers</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis consectetur sit aperiam eaque incidunt obcaecati eum
                    facere eius, molestiae rerum nesciunt, quasi in similique tenetur
                    dolorum, adipisci officiis eveniet aliquam!
                </p>
                <button>
                    <a href='#Products'>Shop Now</a>
                </button>
            </div>
        </div>
    )
}
/// ------------------ Template -------------------- ///
function App() {
    return (
        <React.StrictMode>
            <Header />
            <HomePage />
        </React.StrictMode>
    )
}
export default App;
// #FF0054