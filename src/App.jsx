
import { BrowserRouter,Routes, Route } from "react-router-dom";
import MainDisplay from "./pages/mainDisplay";
import Details from "./pages/details";
import ContactResponse from "./pages/contactResponse";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainDisplay /> } />
      <Route path="/details" element={<Details />} />
      <Route path="/response" element={<ContactResponse />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
