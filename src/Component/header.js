import React from "react";

const Header = ({list}) => {

    const index = list.findIndex(item => item.flag==true);

    return (
        <header>
            {index < 0 && (
                <h1 className="title">Hello, React</h1>
            )}
            {index >= 0 && (
                <h1 className="title">{list[index].name}</h1>
            )}
        </header>
    );
}

export default Header;