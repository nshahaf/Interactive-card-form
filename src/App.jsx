import { useState } from "react";
import CardBack from "./components/CardBack.jsx";
import CardForm from "./components/CardForm.jsx";
import CardFront from "./components/CardFront.jsx";
import SubmitedModal from "./components/SubmitedModal.jsx";

function App() {
  const [form, setForm] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);

  const clearForm = () => {
    setForm({});
  };

  const submitForm = () => {
    console.log(form);
    setIsSubmited(true);
    clearForm();
  };

  const hideModal = () => {
    setIsSubmited(false)
  }

  return (
    <>
      <div className="app-container">
        <aside className="side-container"></aside>
        <main className="main-container">
          {isSubmited ? (
            <SubmitedModal hideModal={hideModal} />
          ) : (
            <CardForm setForm={setForm} submitForm={submitForm} />
          )}
          <CardBack form={form} />
          <CardFront form={form} />
        </main>
      </div>
    </>
  );
}

export default App;
