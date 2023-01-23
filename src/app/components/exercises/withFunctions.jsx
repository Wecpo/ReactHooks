import React from "react";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem(`auth`);
    const onLogin = () => {
        localStorage.setItem(`auth`, "token");
    };
    const onLogOut = () => {
        localStorage.removeItem(`auth`);
    };
    return (
        <>
            <Component
                {...props}
                isAuth={isAuth}
                onLogOut={onLogOut}
                onLogin={onLogin}
            />
        </>
    );
};

export default withFunctions;
