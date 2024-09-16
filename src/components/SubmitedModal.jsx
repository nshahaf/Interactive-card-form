

export default function SubmitedModal({hideModal}) {
  return (
    <div className="modal">
      <div className="img-container"></div>
      <h1>Thank you!</h1>
      <h2>We've added your card details</h2>
      <button onClick={hideModal}>Continue</button>
    </div>

    
  )
}
