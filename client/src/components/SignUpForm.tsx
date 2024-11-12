import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "./Input";

export const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = await axios.post("/users", { username, email, password });
    if (newUser) {
      navigate("/profile");
    } else {
      alert("Error signing up");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input label="Username" state={username} setState={setUsername} />
      <Input label="Email" state={email} setState={setEmail} />
      <Input label="Password" state={password} setState={setPassword} />
      <button type="submit">Sign Up</button>
    </form>
  );
};
