import { Routes, Route } from "react-router-dom";
import { UserForm } from "./components/form.js"
import { UserProfile } from "./components/profile.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserForm/>} />
        <Route path="/:id" element={<UserProfile/>} />
      </Routes>
    </div>
  );
}

export default App;
