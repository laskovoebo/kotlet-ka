import React from "react";
import './userInfoTable.css'

const UserInfoTable = () => {
    console.log('render');
    return(
        <>
            <div className="userStack">
                <div className="userId">
                    ID
                </div>
                <div className="userName">
                    Name
                </div>
                <div className="userCount">
                    Count
                </div>
                <div className="userActions">
                    Actions
                </div>
            </div>
        </>
    );
};

export default UserInfoTable;