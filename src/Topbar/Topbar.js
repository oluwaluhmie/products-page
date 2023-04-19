import React from "react";

import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <header>
            <nav  className={classes.Topbar}>
            <img src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png" alt="Amazon Logo" />
            </nav>
        </header>
    )
}

export default Topbar;