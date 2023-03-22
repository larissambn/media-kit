import { Routes, Route } from "react-router-dom";
import {UserForm} from "./components/form.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserForm/>} />
      </Routes>
    </div>
  );
}

export default App;
