import React from 'react';
import {firebase} from './firebase'

function App() {

  const [tareas, setTareas] = React.useState([])
  const [tarea, setTarea] = React.useState('')
  const [modoEdicion, setModoEdicion] = React.useState(false)
  const [id, setID] = React.useState('')

  React.useEffect(() => {
    const obtenerDatos = async () => {
      try{
        const db = firebase.firestore()
        const data = await db.collection('tareas').get()
        console.log(data.docs)
        const arrayData = data.docs.map(doc => ({
          id: doc.id, ...doc.data()
        }))
        console.log(arrayData)
        setTareas(arrayData)
      } catch (error){
        console.log(error)
      }
    }

    obtenerDatos()
  }, [])

  const agregar = async (e) => {
    e.preventDefault()
    if(!tarea.trim())
    {
      console.log('Vacio')
      return
    }

    try {

      const db = firebase.firestore()
      const nuevaTarea = {
        tarea: tarea,
        fecha: Date.now()
      }

      const data = await db.collection('tareas').add(nuevaTarea)
      setTareas([
        ...tareas,
        {...nuevaTarea, id: data.id}
      ])

      setTarea('')

    } catch(error) {

      console.log('error')

    }
  }

  const eliminar = async (id) => {
    try{
      const db = firebase.firestore()
      await db.collection('tareas').doc(id).delete()
      const arrayFiltrado = tareas.filter(item => item.id !== id)
      setTareas(arrayFiltrado)
    }catch(error){
      console.log(error)
    }
  }

  const activarEdicion = (item) => {
    setModoEdicion(true)
    setTarea(item.tarea)
    setID(item.id)
  }

  const editar = async (e) => {
    e.preventDefault()
    if(!tarea.trim())
    {
      console.log('Vacio')
      return
    }

    try{
      const db = firebase.firestore()
      await db.collection('tareas').doc(id).update({
        tarea: tarea
      })

      const arrayEditado = tareas.map(item => (
        item.id === id ? {id: item.id, fecha: item.fecha, tarea: tarea} : item
      ))

      setTareas(arrayEditado)
      setModoEdicion(false)
      setTarea('')
      setID('')

    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="container mt-3">
      <div className="row my-2">
        <h2>To do list :)</h2>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-6 mb-3 mb-md-0">
          <h3>Tareas</h3>
          <ul className="list-group">
            {
              tareas.map(item => (
                <li className="list-group-item" key={item.id}>
                  {item.tarea}
                  <button
                    className="btn btn-warning btn-sm float-end mx-2"
                    onClick={() => activarEdicion(item)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm float-end mx-2"
                    onClick={() => eliminar(item.id)}
                  >
                    Eliminar
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-md-6">
          <h3>
            {
              modoEdicion ? 'Editar':'Agregar'
            }
          </h3>
          <form action="" onSubmit={modoEdicion ? editar : agregar}>
            <input 
              type="text" 
              placeholder="Ingrese la tarea"
              className="form-control mb-2"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            <div className="d-grid">
              {
                modoEdicion ? (
                  <button
                    className="btn btn-warning btn-block"
                    type="submit"
                  >
                    Editar
                  </button>
                ):(
                  <button
                    className="btn btn-dark btn-block"
                    type="submit"
                  > 
                    Agregar
                  </button>
                )
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
