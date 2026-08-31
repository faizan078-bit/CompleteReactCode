import About from "./components/About";
import Contacct from "./components/Contacct";
import Home from "./Home";

// Functional Component
function App() {
  return(
    <>
      <h1>Welcome to react</h1>
      <h2>You are Welcome</h2>
      <h2>Thank you</h2>
      <p>React makes it easier to build websites where the page needs to update dynamically without reloading the entire page.</p>
      
       <About />
       <Home />
       <Contacct/>

      <h3> Thank you</h3>

    </>
  )
}

export default App;