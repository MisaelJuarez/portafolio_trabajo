import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Inicio";
import Navar from "./Navar";
import '../assets/styles/App.css';

function App() {  
  return (
    <BrowserRouter basename="/portafolio_misael_juarez">
      <Navar />

      <Routes>
        <Route path="/" element={ <Inicio /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
