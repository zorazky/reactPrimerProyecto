const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre + " "}
      {visto ? "TRUE" : "FALSE"}
    </li>
  );
};

export default function ListadoApp() {
  return (
    <>
      <h1>Listado de temas del curso</h1>
      <ol>
        <Items nombre="Instalaciones necesarias" visto={true}></Items>
        <Items nombre="Uso de Vite" visto={true}></Items>
        <Items nombre="Componentes" visto={true}></Items>
        <Items nombre="Variables en JSX" visto={true}></Items>
        <Items nombre="Props" visto={true}></Items>
        <Items nombre="Eventos" visto={false}></Items>
        <Items nombre="useState" visto={false}></Items>
        <Items nombre="Redux" visto={false}></Items>
        <Items nombre="customHooks" visto={false}></Items>
      </ol>
    </>
  );
}
