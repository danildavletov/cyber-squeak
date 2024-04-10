import  React, { createContext } from "react";

const AppContext = React.createContext({
    isLoggedIn: false,
    loginHandler: () => {},
    logoutHandler: () => {},
})

export default AppContext;