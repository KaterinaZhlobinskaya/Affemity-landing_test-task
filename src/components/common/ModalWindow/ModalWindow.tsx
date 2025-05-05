import React, { useRef } from "react";
import "./ModalWindow.scss";

type ModalWindowProps = {
  question: string;
};

const MODAL_ID = "modal-window";

export const openModal = (): Promise<void> => {
  return new Promise((resolve) => {
    const modal = document.getElementById(MODAL_ID) as HTMLDialogElement;
    modal.showModal();
    modal.addEventListener("close", () => resolve(), { once: true });
  });
};

const ModalWindow: React.FC<ModalWindowProps> = ({ question }) => {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <dialog open={false} id={MODAL_ID} ref={ref} className="modal-window">
      <h1 className="modal-window__title">To move forward, specify </h1>
      <p className="modal-window__question">{question}</p>
      <div className="modal-window__btns">
        <button onClick={() => ref.current?.close()}>No</button>
        <button onClick={() => ref.current?.close()}>Yes</button>
      </div>
    </dialog>
  );
};

export default ModalWindow;
