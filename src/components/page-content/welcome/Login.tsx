import React from "react";
import Modal from "../../common/modal/Modal";

type Props = {
  onClose?: () => void;
};

const Login = ({ onClose }: Props) => {
  return (
    <Modal onClose={onClose} className="right-0 h-full w-4/12">
      <div className="flex flex-col items-center">
        <span
          className="mr-auto mt-[-14px] cursor-pointer text-4xl font-extralight"
          onClick={onClose}
        >
          &times;
        </span>
      </div>
    </Modal>
  );
};

export default Login;
