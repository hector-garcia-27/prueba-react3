
export default function Buscador({ lista, setLista, mantenerLista }) {

    function filtrarLista(list, vInput) {
        const valorBuscado = list.filter((e) =>
            e.nombre.toString().toLowerCase().includes(vInput.toString().toLowerCase()) ||
            e.correo.toString().toLowerCase().includes(vInput.toString().toLowerCase()) ||
            e.edad.toString().toLowerCase().includes(vInput.toString().toLowerCase()) ||
            e.cargo.toString().toLowerCase().includes(vInput.toString().toLowerCase()) ||
            e.telefono.toString().toLowerCase().includes(vInput.toString().toLowerCase())
        )
        return valorBuscado
    }
    function filtrarTabla(vinput) {
        const copiadeLista = [...lista]
        let listafiltrda = filtrarLista(copiadeLista, vinput)
        if (vinput === "") {
            return setLista(mantenerLista)
        }
        else {
            return setLista(listafiltrda)
        }
    }
    return (
        <>
            <input type="text" placeholder="Buscar" onChange={(e) => filtrarTabla(e.target.value)} />
            <button >buscar</button>
        </>
    )
}