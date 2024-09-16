import { useEffect, useState } from "react";

export default function CardForm({ setForm }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [digits, setDigits] = useState("");

  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [digitsError, setDigitsError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  // Validate the cardholder's name
  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) {
      setNameError("Name is required");
      return false;
    } else if (!nameRegex.test(name)) {
      setNameError("Name can only contain letters and spaces");
      return false;
    } else if (name.length < 3) {
      setNameError("Name must be longer than 3 characters");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  // Validate the card number
  const validateNumber = (number) => {
    const formattedNumber = number.replace(/\s+/g, '')
    const numberRegex = /^[0-9]{16}$/;
    if (!formattedNumber) {
      setNumberError("Card number is required");
      return false;
    } else if (!numberRegex.test(formattedNumber)) {
      setNumberError("Card number must be 16 digits");
      return false;
    } else {
      setNumberError("");
      return true;
    }
    
  };

   // Validate the expiration month
  const validateMonth = (month) => {
    if (!month || month < 1 || month > 12 || month.length !== 2) {
      setMonthError("Valid month is required");
      return false;
    } else {
      setMonthError("");
      return true;
    }
  };

  // Validate the expiration year
  const validateYear = (year) => {
    const currentYear = new Date().getFullYear().toString().slice(2, 4);
    if (!year || year.length !== 2 || year < currentYear) {
      setYearError("Valid year is required");
      return false;
    } else {
      setYearError("");
      return true;
    }
  };

  // Validate the CVC digits
  const validateDigits = (digits) => {
    const digitsRegex = /^[0-9]{3}$/;
    if (!digits) {
      setDigitsError("CVV is required");
      return false;
    } else if (!digitsRegex.test(digits)) {
      setDigitsError("CVV must be 3 digits");
      return false;
    } else {
      setDigitsError("");
      return true;
    }
  };

 
 

  // Validate the entire form whenever any input changes
  useEffect(() => {
    const isValid =
      validateName(name) &&
      validateNumber(number) &&
      validateMonth(month) &&
      validateYear(year) &&
      validateDigits(digits);

    setIsFormValid(isValid);
  }, [name, number, month, year, digits]);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    switch (field) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "month":
        setMonth(value);
        break;
      case "year":
        setYear(value);
        break;
      case "digits":
        setDigits(value);
        break;
      default:
        break;
    }

    setForm((prevForm) => ({ ...prevForm, [field]: value }));
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
        className={nameError ? "invalid" : ""}
        placeholder="e.g. Jane Appleseed"
        value={name}
        onChange={handleChange}
      />
      {nameError? <p className="errorMsg">{nameError}</p> : <p className="errorMsg"></p>}

      <label htmlFor="card-number">Card number</label>
      <input
        type="text"
        name="number"
        id="number"
        placeholder="e.g. 1234 5678 9123 0000"
        className={numberError ? "invalid" : ""}
        value={number}
        onChange={handleChange}
      />
      {numberError?  <p className="errorMsg">{numberError}</p> : <p className="errorMsg"></p>}

      <div className="date-cvc-labels">
        <label htmlFor="month">EXP. DATE (MM/YY)</label>
        <label htmlFor="digits">CVC</label>
      </div>

      <div className="date-cvc-inputs">
        <input
          type="number"
          id="month"
          name="month"
          className={monthError ? "invalid" : ""}
          placeholder="MM"
          value={month}
          onChange={handleChange}
        />
        <input
          type="number"
          id="year"
          name="year"
          className={yearError ? "invalid" : ""}
          placeholder="YY"
          value={year}
          onChange={handleChange}
        />

        <input
          type="number"
          name="digits"
          id="digits"
          className={digitsError ? "invalid" : ""}
          placeholder="e.g 123"
          value={digits}
          onChange={handleChange}
        />
      </div>
      <div className="date-cvc-errors">
        {(monthError || yearError || digitsError) ? <p className="errorMsg">{monthError || yearError || digitsError}</p> : <p className="errorMsg"></p>}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Confirm
      </button>
    </form>
  );
}
