import React, { useState, useEffect } from 'react';


const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUser] = useState([]);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => setUser(res))
        .catch(err => console.log(err))

      setLoading(false);
    }
    loadPost();
  }, loading);

  const todo = (e) => {
    console.log(e)
    fetch('https://jsonplaceholder.typicode.com/todos/?userId=' + e.target.value)
      .then(res => res.json())
      .then(res => setTodoList(res))
      .catch(err => console.log(err))

  }
  return (
    <div className='users_container'>
      {users.map((user) => {
        return <div className='card'>
          
          <p onClick={todo}>{user.id} {user.name} <a href='#'>read more</a></p>
          <div className='todos'>{todoList.map((todo) => 
          {
            return <div>
              <p>{todo.title} <br/> {todo.completed}</p>
            </div>
          })}</div>
        </div>
      })}

    </div>
  )
}

export default Users