import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos,setTodos]=useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev]);

  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)));
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos&&todos.length>0){
      setTodos(todos)
    }

  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))

  },[todos])



  // return (
  //   <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
  //     <div className="bg-[#172842] min-h-screen py-8">
  //               <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
  //                   <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
  //                   <div className="mb-4">
  //                       {/* Todo form goes here */} 
  //                       <TodoForm/>
  //                   </div>
  //                   <div className="flex flex-wrap gap-y-3">
  //                       {/*Loop and Add TodoItem here */}
  //                       {todos.map((todo)=>(
  //                         <div key={todo.id}
  //                         className='w-full'>
  //                           <TodoItem todo={todo}/>

  //                         </div>
                          

  //                       ))}
  //                   </div>
  //               </div>
  //           </div>
  //   </TodoProvider>
  // )
  return (
  <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
    
    {/* Injecting CSS Keyframe for the moving pastel border animation */}
    <style>{`
      @keyframes gradient-move {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient-move 4s linear infinite;
      }
    `}</style>

    {/* The Full-Screen Container (Fixed layout fixes the white sidebars) */}
    <div className="fixed inset-0 w-screen h-screen bg-[#0d1117] text-gray-100 py-12 overflow-y-auto select-none">
      
      {/* --- Website Related Background Designs (Abstract Checkmarks & Bullets) ---
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0 overflow-hidden">
        {/* Large floating checkmark design top right */}
        {/* <svg className="absolute top-10 right-12 w-96 h-96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> */}
        
        {/* List lines abstract layout bottom left */}
        {/* <svg className="absolute bottom-10 left-10 w-80 h-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" />
        </svg> */}

        {/* Small floating check dots around the page */}
        {/* <div className="absolute top-[40%] left-[15%] w-4 h-4 rounded-full bg-indigo-400"></div>
        <div className="absolute top-[20%] left-[45%] w-3 h-3 rounded-full bg-purple-400"></div>
        <div className="absolute bottom-[30%] right-[20%] w-5 h-5 rounded-full bg-pink-400"></div>
      </div>  */}
      {/* --- Website Related Background Designs (Abstract Checkmarks & Bullets) --- */}
<div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden">
  
  {/* Large floating checkmark design top right - Colored Pastel Mint */}
  <svg className="absolute top-10 right-12 w-96 h-96 text-[#B5EAD7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  
  {/* List lines abstract layout bottom left - Colored Pastel Lavender */}
  <svg className="absolute bottom-10 left-10 w-80 h-80 text-[#E8D7FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" />
  </svg>

  {/* Bright floating decorative circles */}
  <div className="absolute top-[40%] left-[12%] w-6 h-6 rounded-full bg-[#FFDAC1] blur-[2px]"></div>
  <div className="absolute top-[20%] left-[45%] w-4 h-4 rounded-full bg-[#E8D7FF] blur-[1px]"></div>
  <div className="absolute bottom-[30%] right-[15%] w-8 h-8 rounded-full bg-[#C7CEEA] blur-[3px]"></div>
</div>

      {/* --- Main Center Content Wrapper --- */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 flex flex-col items-center">
        
        {/* --- Moving Pastel Border Wrapper for Heading --- */}
        <div className="p-[3px] rounded-2xl bg-gradient-to-r from-pink-300 via-purple-300 via-indigo-300 to-emerald-300 animate-gradient shadow-lg shadow-indigo-500/10 mb-10 w-full max-w-md">
          <div className="bg-[#161b22] rounded-[13px] py-4 px-6 text-center">
            <h1 className="text-2xl font-black uppercase tracking-widest text-center" style={{color:'#B5EAD7'}}>
              Manage Your Todos
            </h1>
          </div>
        </div>

        {/* --- Form Box Layer --- */}
        <div className="w-full bg-[#161b22]/80 backdrop-blur-md border border-gray-800 rounded-xl p-6 shadow-xl mb-6">
          <TodoForm />
        </div>

        {/* --- Items List Layer --- */}
        <div className="w-full flex flex-col gap-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>

      </div>
    </div>
  </TodoProvider>
);
}

export default App
