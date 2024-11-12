import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Users from "./pages/Users";
import Authors from "./pages/Authors";
import AuthorProfile from "./pages/AuthorProfile";
import Tweets from "./pages/Tweets";
import TweetProfile from "./pages/TweetProfile";
import TweetCreate from "./pages/TweetCreate";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <main className="bg-zinc-950/5 flex flex-col h-screen justify-center items-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/users" element={<Users />} />
        <Route path="users/:username" element={<UserProfile />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/:name" element={<AuthorProfile />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="/tweets/new" element={<TweetCreate />} />
        <Route path="/tweets/:id" element={<TweetProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </main>
  );
}

export default App;
