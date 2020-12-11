/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstarklabindia%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=true&appId=1708159449401623"
        width="300"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Widgets;
