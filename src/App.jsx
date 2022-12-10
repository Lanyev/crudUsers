import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FormUsers from "./components/FormUsers";
import UserCard from "./components/UserCard";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  //Estado para guardar los usuarios
  const [users, setUsers] = useState([]);

  //Funcion para obtener todos los usuarios
  const getAllUsers = () => {
    const URL = `${BASE_URL}users/`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Se obtienen todos los usuarios al cargar la pagina
  useEffect(() => {
    getAllUsers();
  }, []);

  //Funcion para crear un usuario
  const createUser = (data) => {
    const URL = `${BASE_URL}users/`;
    axios
      .post(URL, data)
      .then((response) => {
        console.log(response.data);
        getAllUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //Funcion para eliminar un usuario
  const deleteUser = (id) => {
    const URL = `${BASE_URL}users/${id}/`;
    axios
      .delete(URL)
      .then((response) => {
        console.log(response.data);
        getAllUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Users CRUD</h1>
      <FormUsers createUser={createUser} />
      {users?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
