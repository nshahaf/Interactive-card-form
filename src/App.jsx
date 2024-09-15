import CardBack from "./components/CardBack.jsx";
import CardForm from "./components/CardFrom.jsx";
import CardFront from "./components/CardFront.jsx";

function App() {
  return (
    <>
    <div className='app-container'>
     <aside className='side-container'>
      
     </aside>
     <main className='main-container'>
      <CardForm/>
      <CardBack/>
      <CardFront/>
     </main>
    </div>
    </>
  )
}

export default App
