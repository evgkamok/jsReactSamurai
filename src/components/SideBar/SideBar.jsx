import React from "react";
import { NavLink } from "react-router-dom";
import style from "./SideBar.module.css";

const item_names = [
  { name: "Profile", path: "/profile", key: "5" },
  { name: "Dialogs", path: "/dialogs", key: "1" },
  { name: "Posts", path: "/posts", key: "2" },
  { name: "Users", path: "/users", key: "3" },
  { name: "About", path: "/about", key: "4" },
];

const ItemMenu = (props) => {
  return (
    <div>
      <NavLink
        to={props.path}
        className={({ isActive }) => (isActive ? style.active : "")}
      >
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
};


const SideBar = () => {
  return (
    <div>
      <span>Menu</span>
      {item_names.map(({ name, path, key }) => (
        <ItemMenu name={name} path={path} key={key} />
      ))}
    </div>
  );
};

export default SideBar;
