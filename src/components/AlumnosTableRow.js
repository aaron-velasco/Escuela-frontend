import React from "react"
import {Link} from "react-router-dom"


function AlumnosTableRow(props) {
    return (
        <>
        <tr>
            <td>{props.alumno.uuid}</td>
            <td>{props.alumno.nombre}</td>
            <td>{props.alumno.apelldidos}</td>
            <td>{props.alumno.direccion}</td>
            <td>{props.alumno.poblacion}</td>
            <td>{props.alumno.codigo_postal}</td>
            <td>{props.alumno.curso}</td>
        </tr>
        </>
    )
}

export default AlumnosTableRow