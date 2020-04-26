import React from "react";
import { useRouter } from "next/router";
import { Routes } from "../../routes";
console.log("routes", Routes);
const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  const router = useRouter();
  console.log(router);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => Routes.pushRoute(`/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      {/* background image has no child element */}
      {/* we want our content to have same size in hover effect */}
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">title</span>
      </div>
    </div>
  );
};

export default MenuItem;
