import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FormUsers from "./components/FormUsers";
import UserCard from "./components/UserCard";
import "bootstrap/dist/css/bootstrap.min.css";

const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  //Estado para guardar los usuarios
  const [users, setUsers] = useState();
  const [userUpdate, setUserUpdate] = useState();
  const [isShowForm, setIsShowForm] = useState(false);

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
  //Funcion para actualizar un usuario
  const updateUser = (id, data) => {
    const URL = `${BASE_URL}users/${id}/`;
    axios
      .patch(URL, data)
      .then((response) => {
        console.log(response.data);
        getAllUsers();
        setUserUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeShowModal = () => {
    setIsShowForm(!isShowForm);
  };

  //Se obtienen todos los usuarios al cargar la pagina
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <div className="header-container">
        <h1 className="title">CRUD Users</h1>
        <button onClick={handleChangeShowModal} className="header__btn">
          <i className="button-new">+ Add New User</i>
        </button>
      </div>
      <FormUsers
        createUser={createUser}
        userUpdate={userUpdate}
        updateUser={updateUser}
        isShowForm={isShowForm}
        handleChangeShowModal={handleChangeShowModal}
      />
      <div className="users-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
