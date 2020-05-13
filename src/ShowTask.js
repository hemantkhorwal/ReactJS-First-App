import React from 'react'

const ShowTask = ( { tasks , deleteTask } ) => {



const todoList = tasks.length ? ( tasks.map( task => {
     return (
         <div className="collection-item " key={task.id}>
          <span className="center blue-text" onClick={ () => { deleteTask(task.id) } } > { task.content } </span>
        
         
         </div>
     )
 })
 ) : ( <p className="center blue-text"> No tasks, add some</p>)

 return (
    <div className="collection">
     { todoList }
    </div>
)

}



export default ShowTask