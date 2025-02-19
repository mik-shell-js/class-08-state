import Citation from "./Citation";
import { useState } from "react";

export default function GalleryCard({ imgUri, altText, citation = undefined, caption = undefined, color = '#e2e8f0' }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="modal-container">

      <dialog className="modal" open={isModalOpen}>
        <div className="modal-content">
          <button onClick={() => setIsModalOpen(false)} aria-label="close" className="close">&times;</button>

          <img src={imgUri} alt={altText} />
        </div>
      </dialog>

      <button
        className="card"
        style={{ backgroundColor: color }}
        onClick={() => setIsModalOpen(true)}
      >
        <img src={imgUri} alt={altText} />

        <div className="caption">
          {!!caption &&
            <p style={{ borderBottom: "1px solid #000000", paddingBottom: "2px" }}>
              {caption}
            </p>}
          {!!citation &&
            <Citation citation={citation} align="center" />}
        </div>
      </button>

    </div>
  )
}
