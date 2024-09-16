
export default function CardBack({form}) {
  const digits = form.digits? form.digits : "000"

  return (
    <div className="card card-back">
      <div className="magnetic-line"></div>
      <div className="secret-digits flex align-center justify-end">{digits}</div>
    </div>
  )
}
