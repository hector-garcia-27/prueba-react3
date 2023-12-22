import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';

export default function Listado({ baseColaboradores }) {

    const [lista, setLista] = useState(baseColaboradores)

    return (
        <>
            <Table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.nombre}</td>
                                <td>{user.correo}</td>
                                <td>{user.edad}</td>
                                <td>{user.cargo}</td>
                                <td>{user.telefono}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}
