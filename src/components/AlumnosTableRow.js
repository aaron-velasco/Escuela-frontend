import React from "react"
import {Link} from "react-router-dom"

function AlumnosTableRow(props) {
    let edit = ''
    if(localStorage.getItem('logged_in'))
         edit = <Link to={ `/alumno/edit/${props.alumno.uuid}` } className="text-blue-600 underline">Editar</Link>
    return (
        <tr>
            <td>{props.alumno.uuid}</td>
            <td>{props.alumno.nombre}</td>
            <td>{props.alumno.apellidos}</td>
            <td>{props.alumno.direccion}</td>
            <td>{props.alumno.poblacion}</td>
            <td>{props.alumno.codigo_postal}</td>
            <td>{props.alumno.curso}</td>
            <td><Link to={ `/alumno/${props.alumno.uuid}` } className="text-blue-600 underline">Ver</Link> {edit}</td>
        </tr>
    )
}

export default AlumnosTableRow