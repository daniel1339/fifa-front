import axios from "axios";
import { useState } from "react";
import "./sidebar.css";
import Swal from 'sweetalert2';

export default function Sidebar() {
  const [teams, setTeams] = useState([]);
  const [dataSearch, setDataSearch] =useState({
    caja:"",
  });

  const handleInputChange=(event)=>{
    setDataSearch({
      ...dataSearch,
      [event.target.name]:event.target.value
    })
  }
  
  
  const search= async () =>{
    await axios.get("search/"+dataSearch.caja).then(response=>{
      if(response.data.length !==0){
        setTeams(response.data);
      }else{
        Swal.fire(
          "No hay Resultado!",
          "",
          "info")};
        }).catch(error=>{
          console.log(error);
        });
      }


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Buscar equipo</span>
        <input name="caja" onChange={handleInputChange} placeholder="Ingresa Busqueda"/>
        <button onClick={()=>search()}> enviar</button>
       
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Equipos</span>
        <ul className="sidebarList">
          {teams.map((team) => (
            <li className="sidebarListItem">{team.team}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}