import React from 'react';

function Header() {
    const navs = [
        { id: "service", title: "SERVICE" },
        { id: "home", title: "HOME" },
        { id: 'account', title: "ACCOUNT" },
        { id: 'promotion', title: "SALE" },
        { id: 'news', title: "NEWS" }
    ]

    return (
        <header>
            <h1>COZORO HOME</h1>
            <h2>Cozy Like Your Home</h2>
            <nav>
                <ul>
                    {navs.map(item => (
                        <Display id={item.id} content={item.title} />
                    ))}
                </ul>
            </nav>
        </header>
    )
}

function Display(props) {
    return <li id={props.id}>{props.content}</li>;
}

export default Header;
