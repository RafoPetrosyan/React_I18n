import React from "react";
import Header from "../header";
import './style.scss';

const Wrapper = ({ children }) => {
    return (
        <div className='wrapper'>
            <Header />
            <div className='wrapperContainer'>
                {children}
            </div>
        </div>
    )
}
export default Wrapper;