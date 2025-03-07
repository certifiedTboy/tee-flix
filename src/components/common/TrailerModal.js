import { useEffect } from "react";
import { createPortal } from "react-dom";
import TrailerPlayer from "./TrailerPlayer";
import "./TrailerModal.css";

const TrailerModal = ({ trailerKey, setOpenModal, open }) => {
  useEffect(() => {
    // Add or remove overflow hidden on <html> tag
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    // Cleanup function to reset overflow on unmount
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return createPortal(
    <div className="modalBackground" onClick={setOpenModal}>
      <div className="modalContainer">
        {trailerKey ? (
          <TrailerPlayer trailerId={trailerKey} />
        ) : (
          <h1 style={{ color: "#e4d804" }}>No Available Trailer</h1>
        )}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default TrailerModal;
