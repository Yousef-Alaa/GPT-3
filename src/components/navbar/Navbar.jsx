import React, { useState } from 'react';

import './Navbar.css'

function Navbar() {

    let [activeMenu, setActive] = useState(false)
    let [activeItem, setItem] = useState('home')
    let items = ['home', 'What is GPT?', 'open ai', 'case studies', 'library']

    return (
        <nav className='absolute top-[20px] md:top-[15px] left-0 w-full'>
            <div className="container flex items-center justify-between">
                <div className="order-2 md:order-1 font-bold text-3xl uppercase">gpt-3</div>
                <ul className={`hidden md:flex md:order-2 capitalize text-lg ${activeMenu && 'active'}`}>
                    {
                        items.map((item, ind) => <li key={ind} className={`nav-li ${item === activeItem && 'active'}`}>
                            <a href={`#${item.split(" ").join("")}`} onClick={e =>  setItem(item)}>{item}</a>
                        </li>)
                    }
                </ul>
                <div className="text-sm xs:text-base order-1 md:order-2">
                    <button className='capitalize'>sign in</button>
                    <button className='capitalize bg-orange ml-2 py-[0.25rem] px-[0.35rem] xs:py-[0.38rem] xs:px-[0.55rem] rounded-[3px]'>sign up</button>
                </div>
                <div onClick={() => setActive(info => !info)} className={`md:hidden order-3 menu ${activeMenu && 'active'}`}>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;