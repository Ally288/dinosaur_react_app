import React from 'react'
import '../static/css/Header.css'

const Header = () => {
  return (
    <>
    {/* <img src ={require("../static/images//logo/logoheader.png")} alt="logo" className="logo" height="100%" width="100%" /> */}
    <h1 className='header'><img src ={require("../static/images//logo/BBC1988.png")} alt="logo" className="logo" height="100%" width="100%" />SAURUS</h1>
    {/* <h1 className="header" >BBCSAURUS</h1> */}
    </>
  );
};

export default Header