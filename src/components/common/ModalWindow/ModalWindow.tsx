import React, { useEffect, useRef, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);
    const mo = new MutationObserver(() => {
      if (ref.current?.open) {
        open();
      } else {
        close();
      }
    });

    mo.observe(ref.current!, { attributes: true });

    return () => {
      mo.disconnect();
    };
  }, []);

  return (
    <div className={`overlay${!isOpen ? "__hidden" : ""}`}>
      <dialog open={false} id={MODAL_ID} ref={ref} className="modal-window">
        <p className="modal-window_question">{question}</p>
        <div className="modal-window__btns">
          <button onClick={() => ref.current?.close()}>No</button>
          <button onClick={() => ref.current?.close()}>Yes</button>
        </div>
      </dialog>
    </div>
  );
};

export default ModalWindow;
