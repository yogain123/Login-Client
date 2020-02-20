import React, { Component } from "react";
import ReactDOM from "react-dom";
import history from "../services/History";
const Modall = props => {
  return ReactDOM.createPortal(
    <div
      id="myModal"
      class="modal"
      onClick={() => {
        history.push("/");
      }}
    >
      <div class="modal-content" onClick={event => event.stopPropagation()}>
        <div class="modal-header">
          <h2>Information(Click Outside to Dismiss)</h2>
        </div>
        <div class="modal-body">
          <p>Something Went Wrong</p>
          <p>Something went wrong while operating</p>
        </div>
        <div class="modal-footer">
          <h3>This is a Modal</h3>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modall;
