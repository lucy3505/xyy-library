import React from "react";
import "./index.scss";
import Pop from "../button/button.js";
export default function Header() {
  return (
    <div className="app-header">
      <div className="left"></div>
      <div className="right">
        <Pop />
      </div>
    </div>
  );
}
