import { Routes, Route, Link } from "react-router-dom";
import "./app.scss";

import Navbar from "../src/shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to React Router Help Page!</h1>
      <Routes>
        <Route path="/help" element={<Home />} />
        <Route path="/help/about" element={<About />} />
      </Routes>
    </div>
  );
}

// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the Help homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/help/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/help">Home</Link>
      </nav>
    </>
  );
}

export default App;
