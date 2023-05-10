/*
 * @Author: g05047
 * @Date: 2023-05-10 14:59:04
 * @LastEditors: g05047
 * @LastEditTime: 2023-05-10 16:37:08
 * @Description: file content
 */
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../../views/home/index";
import { Link } from "react-router-dom";
import './index.css'

export default function Head() {
  const menuList = [
    {
      label: "Home",
      value: "/"
    },
    {
      label: "Archive",
      value: "archive"
    },
    {
      label: "Journey",
      value: "journey"
    },
    {
      label: "Tags",
      value: "tags"
    },
    {
      label: "About",
      value: "about"
    },
    
  ];
  const menuItem = menuList.map((item,i)=>(
    
    <div className="menu-item" key={i}><Link to={item.value}>{item.label}</Link></div>
  ))
  return (
    <div className="menu">
      {/* <div className="menu-item"></div> */}
      {menuItem}
    </div>
  );
}
