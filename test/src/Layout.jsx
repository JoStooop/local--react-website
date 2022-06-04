import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {

    // <NavLink to="/posts">Blog</NavLink>
    // когда активный добавляет к className -> 'active'
    // первый вариант


    const setActive = ({isActive}) => isActive ? "active-link" : ''
    // второй вариант


    // const setActiveCustom = ({isActive}) => ({color: isActive ? 'red' : "blue"})
    // третий вариант


    return (
        <>
            <header>
                <NavLink className={setActive}  to="/">Home</NavLink>
                <NavLink className={setActive} to="/about">About</NavLink>
                <NavLink className={setActive} to="/posts">Blog</NavLink>
            </header>
            <main className="container">
                <Outlet/> {/*// куда потом будет отображаться весь основной контент*/}
            </main>
            <footer>2022</footer>
        </>
    );
};

export default Layout;