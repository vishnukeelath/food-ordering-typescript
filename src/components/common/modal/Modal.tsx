import React from "react";

type Props = {
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  position?: string;
  centered?: Boolean;
};

const Modal = ({
  onClose,
  children,
  className,
  position,
  centered = false,
}: Props) => {
  const centeredClass =
    "fixed inset-0  h-full w-full flex items-center justify-center bg-gray-800 bg-opacity-75 transition-opacity";
  const notCenteredClass =
    "fixed inset-0  h-full w-full bg-gray-800 bg-opacity-75 transition-opacity";
  return (
    <>
      <div
        className={centered ? centeredClass : notCenteredClass}
        // className="fixed inset-0  h-full w-full bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={onClose}
      >
        <div
          className={`${className} absolute transform overflow-hidden bg-white p-5 shadow-xl`}
          //   className="absolute max-h-[80%] max-w-[80%] transform overflow-hidden rounded-lg bg-white p-5  shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* <div className="modal-header">
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          </div> */}
          {children}
          {/* <div className="modal-body"></div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
