
import './App.css'
import AddTodo from './components/Addtodo'
import Todolist from './components/Todolist'

function App() {


  return (
    <>
    <AddTodo/>
     <div className='  w-[50vw]  rounded-lg shadow-lg bg-slate-400 min-h-8'>
      <Todolist/>

     </div>
    </>
  )
}

export default App
