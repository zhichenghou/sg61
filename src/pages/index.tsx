import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import AddNew from "../components/AddNew";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container mx-auto">
      <AddNew />
    </div>
  );
}

export default App;
