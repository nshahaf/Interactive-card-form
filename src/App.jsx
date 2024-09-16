import { useState } from "react";
import CardBack from "./components/CardBack.jsx";
import CardForm from "./components/CardForm.jsx";
import CardFront from "./components/CardFront.jsx";

function App() {
  const [form, setForm] = useState({});

  const clearForm = () => {
    setForm({});
  }

  const submitForm = () => {
    console.log(form)
    clearForm()
  };

  return (
    <>
      <div className="app-container">
        <aside className="side-container"></aside>
        <main className="main-container">
          <CardForm setForm={setForm} submitForm={submitForm}/>
          <CardBack form={form}/>
          <CardFront form={form}/>
        </main>
      </div>
    </>
  );
}

export default App;
