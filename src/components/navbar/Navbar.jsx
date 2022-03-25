import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Grandine.svg';
import './navbar.css';

const Menu = () => {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is Grandine?</a></p>
            <p><a href="#possibility">Prediction</a></p>
            <p><a href="#features">Weather Now</a></p>
            <p><a href="#blog">Blog</a></p>
        </>
    )
}

const Navbar = () => {
    /* test Fetch*///////////////////////////////////////////////////////////////////////////////////////////////
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://reqres.in/api/users/2")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setIsLoaded(true);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if(isLoaded) console.log(items);
    /* test Fetch*//////////////////////////////////////////////////////////////////////////////////////////////

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;