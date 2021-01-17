import { React, useState, useEffect } from "react";
import AlumnosTableRow from "./AlumnosTableRow";
import { Link } from "react-router-dom";

function AlumnosTable() {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState("Cargando");
  var menuHead = "";
  if(localStorage.getItem('logged_in')){
    menuHead = <div>
        <Link className="text-blue-600 underline" to="/alumno/create"> Crear alumno </Link>
    </div>
  } else {
      menuHead = <Link className="text-blue-600 underline" to="/login"> Iniciar sesión </Link>
  }
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/alumnos`)
      .then((response) => response.json())
      .then((data) =>
        setAlumnos(
          data.map((alumno) => (
            <AlumnosTableRow key={alumno.uuid} alumno={alumno} />
          )),
          setLoading("")
        ))
        .catch((error) => setLoading('Error al conectarse con la API'))
  });

  return (
    <>
      <h1 className="py-12 text-4xl">Listado de alumnos</h1>
        {menuHead}
      <br />
      <table className="mx-auto m-4 w-4/6 table-auto border-collapse border border-green-800">
        <thead>
          <tr>
            <th>UUID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Curso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{alumnos}</tbody>
      </table>
      {loading}
    </>
  );
}

export default AlumnosTable;
