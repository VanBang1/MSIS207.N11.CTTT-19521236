import * as React from 'react';

const MyButton2 = ({disabled, text}) =>(
    <button disabled={disabled}>{text}</button>
);

MyButton2.defaultProps = {
    text:"My Button",
    disabled: false,
};

export default MyButton2;