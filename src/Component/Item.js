import React from "react";
const Item = ({index, name, nickname, flag, event}) => {
    return (
        <li className={`item ${flag && 'clicked'}`} onClick={()=>event(index)}>
            {`name: ${name} nickname: ${nickname}`}
        </li>
    );
}

export default Item;