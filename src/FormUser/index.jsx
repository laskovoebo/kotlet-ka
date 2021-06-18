import React from "react";
import './formUser.css';

const FormUser = () => {
    console.log('render');
    return(
        <div className="formUser">
            <lable>
                UserName:
            </lable>
            <input type="text"/>
            <button className="setUser">
                Add
            </button>
            <button className="clearAll">
                Clear all
            </button>
        </div>
    );
};

export default FormUser