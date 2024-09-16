
export default function CardFront({
  cardNumber = "0000 0000 0000 0000",
  name = "John Doe",
  date = "00/00",
}) {


  return (
    <div className="card card-front">
      <div className="logo">
        <div className="circle white"></div>
        <div className="circle"></div>
      </div>
      <div className="card-number flex justify-start">{cardNumber}</div>
      <div className="card-footer flex align-center space-between">
        <div className="name">{name}</div>
        <div className="valid-date">{date}</div>
      </div>
    </div>
  );
}
