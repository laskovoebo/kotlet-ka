import React from "react";
import './userItem.css';

const UserItem = () => {
    console.log('render');
    return(
        <>
            <div className="userItemId">
            1
            </div>
            <div className="userItemName">
                laskovoebo
            </div>
            <div className="userItemCount">
                777
            </div>
            <div className="userDelete">
                <button>
                    delete
                </button>
            </div>
        </>
    );
};

export default UserItem;