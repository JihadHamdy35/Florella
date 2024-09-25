import React from 'react';
import './App.css';
import root from './index.js';
/// HEADER ///
window.onresize = () => {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
function changeColor(ele) {
    ele = document.querySelectorAll(`header ul li a img`)[ele];
    let src = ele.getAttribute('src');
    if (src.includes('_red')) {
        src = src.replace('_red', '');
        ele.setAttribute('src', src);
    } else {
        src = src.replace('.png', '_red.png');
        ele.setAttribute('src', src);
    }
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
                <li><a href='#Home'>Home</a></li>
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
            src='./assets/menu.png' 
            alt='menu' 
            onClick={function () { 
                let ele = document.querySelector('header .header-list ul');
                ele.classList.toggle('active');
                if (ele.classList.contains('active')) {
                    ele.style.height = '15em';
                } else {
                    ele.style.height = '0em';
                }
                }}/>
        </div>
    )
}
function IconsList() {
    return (
        <ul>
            <li>
                <a href='./favourites.html'>
                    <img src='./assets/favourite.png'
                        alt='favourite'
                        className='favourite'
                        onMouseEnter={function () { changeColor(0) }}
                        onMouseLeave={function () { changeColor(0) }} />
                </a>
            </li>
            <li>
                <a href='./cart.html'>
                    <img
                        src='./assets/cart.png'
                        alt='cart'
                        className='cart'
                        onMouseEnter={function () { changeColor(1) }}
                        onMouseLeave={function () { changeColor(1) }} />
                </a>
            </li>
            <li>
                <a href='./user.html'>
                    <img
                        src='./assets/user.png'
                        alt='User'
                        className='user'
                        onMouseEnter={function () { changeColor(2) }}
                        onMouseLeave={function () { changeColor(2) }} />
                </a>
            </li>
        </ul>
    )
}
function App() {
    return (
        <React.StrictMode>
            <Header />
        </React.StrictMode>
    )
}
export default App;
// #FF0054