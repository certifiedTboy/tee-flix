import { useEffect } from "react";
import { createPortal } from "react-dom";
import TrailerPlayer from "./trailer-player";
import "./trailer-modal.css";

const TrailerModal = ({
  trailerKey,
  setOpenModal,
  open,
}: {
  trailerKey: string;
  setOpenModal: () => void;
  open: boolean;
}) => {
  useEffect(() => {
    const previousOverflow = document.documentElement.style.overflow;
    if (open) document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [open]);

  const modalRoot = document.getElementById("modal");

  if (!open || !modalRoot) return null;

  return createPortal(
    <div className="modalBackground" onClick={setOpenModal}>
      <div
        className="modalContainer"
        role="dialog"
        aria-modal="true"
        aria-label="Movie trailer"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modalCloseButton"
          type="button"
          aria-label="Close trailer"
          onClick={setOpenModal}
        >
          ×
        </button>
        {trailerKey ? (
          <TrailerPlayer trailerId={trailerKey} />
        ) : (
          <h1 style={{ color: "#e4d804" }}>No Available Trailer</h1>
        )}
      </div>
    </div>,
    modalRoot,
  );
};

export default TrailerModal;
