import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Players from "../../components/players/Players";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";


export default function Home() {
  const [players, setPlayers] = useState([]);
  

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/players?sort=desc");
      setPlayers(res.data);
    };
    getPosts();
  }, []);
  return (
    <div>
      <Header />
      <div className="home">
        <Players players={players} />
        <Sidebar />
      </div>
    </div>
  );
}