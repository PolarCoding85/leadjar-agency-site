import React from "react";

export default function Join(props) {
  return (
    <>
      {props.status ? (
        <div className="lang-wrap">
          <div className="show-join-link">
            <span>
              <strong>{props.title}</strong>
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}
