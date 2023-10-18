import { useEffect, useState } from "react";
import { UserList } from "./components/userList";

export const UsersApp = () => {
  useEffect(() => {}, []);

  const [endPoint, setEndPoint] = useState("users");
  const handleFetch = () => {
    setEndPoint("comments");
  };
  return (
    <>
      <h1>Lista de Ussuarios:</h1>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handleFetch}>Aqui se llama a la API</button>
    </>
  );
};
