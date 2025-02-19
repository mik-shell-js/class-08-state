import { useState } from "react";

export default function BusinessCard({ name, email, logo = undefined }) {
  const [isBackShowing, setIsBackShowing] = useState(false);

  return (
    <div className="business-card">
      {!isBackShowing &&
        <div className="side front">
          {!!logo && <img src={logo} alt="logo" />}

          <div style={{ flexGrow: 1 }}>
            <h2>{name}</h2>
            <p>{email}</p>
          </div>

          <button onClick={() => { setIsBackShowing(true) }}>
            More
          </button>
        </div>}

      {!!isBackShowing &&
        <div className="side back">
          <p>Ezra Cornell co-founded Cornell University in 1865.</p>

          <button onClick={() => { setIsBackShowing(false) }}>
            Less
          </button>
        </div>}
    </div>
  )
}
