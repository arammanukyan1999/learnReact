import React from 'react'
import TodoItem from './TodoItem'


export default ({todos})=>(
    <ul className='todolist'>
        {todos.map((el,ind)=>(
            <TodoItem todo={el} key={ind} />
        ))}
    </ul>
)
