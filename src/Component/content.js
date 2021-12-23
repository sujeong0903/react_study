import React from "react";
import Item from "./Item";

const Content = ({list, event}) => {
    return (
        <div>
            {list.map((item, index) => {
                return <Item key={`key-${index}`} index={index} name={item.name} nickname={item.nickname} flag={item.flag} event={event} />
            })}
        </div>
    );
}

export default Content;