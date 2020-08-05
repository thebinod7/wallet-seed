import React from "react";

export default function Header() {
  return (
    <div>
      <div className="appHeader bg-primary scrolled">
        <div className="left d-none">
          <a
            href="fake_value"
            className="headerButton"
            data-toggle="modal"
            data-target="#sidebarPanel"
          >
            <ion-icon name="home-outline" />
          </a>
        </div>
        <div className="pageTitle">Rumsan Sanduk</div>
        <div className="right">
          <a href="fake_value" className="headerButton logout">
            <ion-icon name="log-out-outline" />
          </a>
        </div>
      </div>
    </div>
  );
}
