import React from "react"
import {Link} from "react-router-dom"

function AlumnosTableRow(props) {
    let edit = ''
    if(localStorage.getItem('logged_in'))
         edit = <Link to={ `/alumno/edit/${props.alumno.uuid}` } className="text-yellow-600 underline">Editar</Link>
    return (
        <tr className="shadow-sm">
            <td className="px-16 py-2">{props.alumno.uuid}</td>
            <td className="px-16 py-2">{props.alumno.nombre}</td>
            <td className="px-16 py-2">{props.alumno.apellidos}</td>
            <td className="px-16 py-2">{props.alumno.curso}</td>
            <td className="px-16 py-2"><Link to={ `/alumno/${props.alumno.uuid}` } className="text-blue-600 underline">Ver</Link> {edit}</td>
        </tr>
    )
}

export default AlumnosTableRow