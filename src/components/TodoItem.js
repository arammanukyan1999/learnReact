import React from 'react'
export default ({todo})=>(
        <li className='todoitems'>
            <input type = 'checkbox' />
            <span>
              {todo.description}
            </span>

        </li>
)
