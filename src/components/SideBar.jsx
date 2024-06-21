import React, { useEffect } from "react";
import { Toast } from "bootstrap";

export default function SideBar() {
  useEffect(() => {
    // * Enable Bootstrap's Toast
    var toastElList = [].slice.call(document.querySelectorAll(".toast"));
    toastElList.map(function (toastEl) {
      return new Toast(toastEl);
    });
  }, []);

  return (
    <div className="sidebar">
      <div
        className="text-center w-100 p-3"
        id="copyToClipboard"
        onClick={copyToClipboard}
      >
        <span className="text-link fs-6">
          <i className="bi bi-link-45deg"></i>&emsp;Copy URL
        </span>
        <div
          className="toast align-items-center bg-dark"
          id="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">URL Copied to Clipboard.</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>

      <a href="/articles">
        <button className="btn btn-primary w-100">
          <i className="bi bi-file-text"></i>&emsp;Read Another Posts
        </button>
      </a>
    </div>
  );
}

function copyToClipboard() {
  navigator.clipboard.writeText(window.location.href);

  document.getElementById("copyToClipboard").onclick = function () {
    var copied = document.getElementById("toast");
    var show = new Toast(copied);
    show.show();
  };
}
