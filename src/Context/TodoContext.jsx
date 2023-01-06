import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

const TodoProvider = ({children}) =>{
    const [todos,settodos] = useState([])
    
    const data = {
        todos,settodos
    }

    return(
        <Context.Provider value={data}>{children}</Context.Provider>
    )
}

export default TodoProvider;

export const useTodo=()=>useContext(Context)



