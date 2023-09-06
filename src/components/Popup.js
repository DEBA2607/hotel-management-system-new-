import React from "react";
import ReactDom from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import PopupMenu from "./PopupMenu";
function Popup({ isVisible, onClose }) {
  if (!isVisible) return null;
  return ReactDom.createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-2/4 h-100%">
          <div className="bg-zinc-200 p-2 rounded h-96 w-auto flex flex-col">
            <button className="place-self-end" onClick={() => onClose()}>
              <IoCloseSharp />
            </button>
            <PopupMenu />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Popup;
