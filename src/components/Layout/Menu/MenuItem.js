import React from 'react';

const menuItem = (props) => (
    <>
        <li className="nav-item">
            <a className="nav-link" href={props.link}>
                {props.label}
            </a>
        </li>
    </>
);

export default menuItem;