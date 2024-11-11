import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Authors from "./pages/Authors";
import Tweets from "./pages/Tweets";
import About from "./pages/About";
import { links } from "./constants/index.ts";

function App() {
  return (
    <main className="bg-zinc-950/5 flex flex-col h-screen justify-center items-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
