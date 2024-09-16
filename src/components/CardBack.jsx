import { useState } from "react";

export default function CardBack() {
  const [digits, setDigits] = useState(111);

  return (
    <div className="card card-back">
      <div className="magnetic-line"></div>
      <div className="secret-digits flex align-center justify-end">{digits}</div>

    </div>
  )
}
