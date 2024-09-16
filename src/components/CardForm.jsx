import { useState } from "react";

export default function CardForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    switch (field) {
      case "name":
        setName(value);
        break;
      case "card-number":
        setCardNumber(value);
        break;
      case "month":
        setMonth(value);
        break;
      case "year":
        setYear(value);
        break;
      case "cvc":
        setCvc(value);
        break;
      default:
        break;
    }

    const form = {
      name,
      cardNumber,
      month,
      year,
      cvc,
    };
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container flex column" onSubmit={handleSubmit}>
      <label htmlFor="name" className="label-name">
        Cardholder name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="e.g. Jane Appleseed"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="card-number">Card number</label>
      <input
        type="text"
        name="card-number"
        id="card-number"
        placeholder="e.g. 1234 5678 9123 0000"
        value={cardNumber}
        onChange={handleChange}
      />
      <div className="date-cvc-labels">
        <label htmlFor="month">EXP. DATE (MM/YY)</label>
        <label htmlFor="cvc">CVC</label>
      </div>

      <div className="date-cvc-inputs">
        <input
          type="number"
          id="month"
          name="month"
          placeholder="MM"
          value={month}
          onChange={handleChange}
        />
        <input
          type="number"
          id="year"
          name="year"
          placeholder="YY"
          value={year}
          onChange={handleChange}
        />

        <input
          type="number"
          name="cvc"
          id="cvc"
          placeholder="e.g 123"
          value={cvc}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
}
