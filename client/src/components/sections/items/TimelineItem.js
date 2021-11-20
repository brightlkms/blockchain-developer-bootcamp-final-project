import React from "react";

function TimelineItem({ position, image, title, sec_title, text }) {
  return (
    <div className="display-flex TimelineItem">
      {position == "right" ? (
        <div className="max-600" style={{ width: "40%" }}>
          <div className="content">
            <h2 className="first_title">{title} </h2>

            <h1 className="sec_title" style={{ fontWeight: "bolder" }}>
              {sec_title}
            </h1>

            <p>{text}</p>
          </div>
        </div>
      ) : null}
      <div className={`container_cust ${position}`}>
        <div className="content">
          <img style={{ width: "100%" }} src={image} />
        </div>
      </div>
      {position == "left" ? (
        <div className="max-600" style={{ width: "40%" }}>
          <div className="content">
            <h2 className="first_title">{title} </h2>

            <h1 className="sec_title" style={{ fontWeight: "bolder" }}>
              {sec_title}
            </h1>

            <p>{text}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TimelineItem;
