import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre + " "}
      {visto ? "TRUE" : "FALSE"}
    </li>
  );
};

export default function ListadoApp() {
  const addTask = () => {
    setArreglo([...arreglo, { nombre: "nuevo", visto: false }]);
  };
  let listadoSecciones = [
    { nombre: "Instalaciones necesarias", visto: true },
    { nombre: "Uso de Vite", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Variables en JSX", visto: true },
    { nombre: "Props", visto: true },
    { nombre: "Eventos", visto: true },
    { nombre: "useState", visto: false },
    { nombre: "Redux", visto: false },
    { nombre: "customHooks", visto: false },
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);

  return (
    <>
      <h1>Listado de temas del curso</h1>
      <AgregarTarea></AgregarTarea>
      <ol>
        {arreglo.map((item) => (
          <Item
            nombre={item.nombre}
            visto={item.visto}
            key={item.nombre}
          ></Item>
        ))}
      </ol>
    </>
  );
}
