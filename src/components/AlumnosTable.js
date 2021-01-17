import { React, useState, useEffect } from "react";
import AlumnosData from "../data/AlumnosData";
import AlumnosTableRow from "./AlumnosTableRow";

function AlumnosTable() {

  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(false);
  var msg = "";
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/alumnos")
      .then((response) => response.json())
      .then((data) =>
        setAlumnos(
          data.map((alumno) => <AlumnosTableRow key={alumno.uuid} alumno={alumno} />),
          setLoading(false)
        )
      );

    if (loading) {
      msg = <p>Cargando</p>;
    }
  });

  return (
    <>
      {msg}
      <h1 className="py-12 text-4xl">Listado de alumnos</h1>
      <table className="mx-auto m-4 w-4/6 table-auto border-collapse border border-green-800">
        <thead>
          <tr>
            <th>uuid</th>
            <th>nombre</th>
            <th>apellidos</th>
            <th>direccion</th>
            <th>poblacion</th>
            <th>codigo_postal</th>
            <th>curso</th>
          </tr>
        </thead>
        <tbody>{alumnos}</tbody>
      </table>
    </>
  );
}

export default AlumnosTable;
