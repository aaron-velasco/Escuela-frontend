import { React, useState, useEffect } from "react";
import AlumnosData from "../data/AlumnosData";
import AlumnosTableRow from "./AlumnosTableRow";

function AlumnosTable() {
  const alumn = AlumnosData.map((alumno) => (
    <AlumnosTableRow alumno={alumno} />
  ));

  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(false);
  var msg = "";
  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/alumnos")
      .then((response) => response.json())
      .then((data) =>
        setAlumnos(
          data.map((alumno) => <AlumnosTableRow alumno={alumno} />),
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
      <table>
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
