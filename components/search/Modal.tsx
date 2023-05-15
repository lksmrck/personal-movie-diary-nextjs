import { Modal as MUI_Modal } from "@mui/material";
import Search from "./Search";

import { FC } from "react";

type Props = {
  isModalOpen: boolean;
  handleModalClose: () => void;
};
const Modal: FC<Props> = ({ isModalOpen, handleModalClose }) => {
  return (
    <MUI_Modal
      open={isModalOpen}
      onClose={handleModalClose}
      className="flex justify-center items-center"
    >
      <div className=" w-96 h-56 bg-white text-center">
        <Search />
      </div>
    </MUI_Modal>
  );
};

export default Modal;
