export default function CardFront({ form }) {
  const name = form.name ? form.name : "John Doe";
  const number = form.number ? form.number : "";
  const month = form.month ? form.month : "00";
  const year = form.year ? form.year : "00";

  const formatCardNumber = (input) => {
    const template = "0000 0000 0000 0000";

    // Remove all non-digit characters from input
    const digits = input.replace(/\D/g, "");

    // Ensure the input has up to 16 digits
    const formattedDigits = digits.padEnd(16, "0"); // Pad with '0' if less than 16 digits

    // Replace zeros in the template with the input digits
    let result = "";
    let digitIndex = 0;

    for (let i = 0; i < template.length; i++) {
      if (template[i] === "0") {
        result += formattedDigits[digitIndex] || "0";
        digitIndex++;
      } else {
        result += template[i];
      }
    }

    return result;
  };

  return (
    <div className="card card-front">
      <div className="logo">
        <div className="circle white"></div>
        <div className="circle"></div>
      </div>
      <div className="card-number flex justify-start">{formatCardNumber(number)}</div>
      <div className="card-footer flex align-center space-between">
        <div className="name">{name}</div>
        <div className="valid-date">{`${month}/${year}`}</div>
      </div>
    </div>
  );
}
