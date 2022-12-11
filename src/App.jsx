import axios from "axios";
import { useEffect, useState } from "react";
import FormUsers from "./components/FormUsers";
import UserCard from "./components/UserCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
// URL base de la API
const BASE_URL = "https://users-crud.academlo.tech/";

function App() {
  //Estado para guardar los usuarios
  const [users, setUsers] = useState();
  // Estado para guardar la información del usuario que se está actualizando
  const [userUpdate, setUserUpdate] = useState();
  // Estado para controlar si se muestra el formulario para crear o actualizar usuarios
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
        handleChangeShowModal();
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
        handleChangeShowModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Función para cambiar el estado de si se muestra el formulario para crear o actualizar usuarios
  const handleChangeShowModal = () => {
    setIsShowForm(!isShowForm);
  };
  // Función para mostrar el formulario para crear un usuario nuevo
  const handleClickNewUser = () => {
    setUserUpdate();
    handleChangeShowModal();
  };

  //Se obtienen todos los usuarios al cargar la pagina
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <div className="header-container">
        <h1 className="title">CRUD Users</h1>
        <button onClick={handleClickNewUser} className="button">
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
            handleChangeShowModal={handleChangeShowModal}
          />
        ))}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
