import {React, useState, useEffect} from "react"
import {Link} from "react-router-dom"

function AlumnoDelete(props) {

    
    useEffect(() => {
        
    },[])
   
    return (
        <tr className="shadow-sm">
            <td className="px-16 py-2">{props.alumno.uuid}</td>
            <td className="px-16 py-2">{props.alumno.nombre}</td>
            <td className="px-16 py-2">{props.alumno.apellidos}</td>
            <td className="px-16 py-2">{props.alumno.curso}</td>
        </tr>
    )
}

export default AlumnoDelete