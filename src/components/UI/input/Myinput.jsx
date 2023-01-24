import React from 'react';
import classes from './Myinput.module.css'
const Myinput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.MyInput} {...props}/>
    );
});

export default Myinput;