import React, { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react'


export default function FormPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
        axios.get('https://dummyjson.com/posts/1')
        .then(response => {
            const data = response.data;
            setTasks(data.posts);
        })
    }, []);
  return (
    <div>
      <h3>Создать пост</h3>
      <button onClick={tasks.map((task) => (
          <div key={task.id}>
            <h4>{task.title}</h4>
            <p>{task.body}</p>
            <p>{task.tags}</p>
            </div>
      ))}
      >Создать</button>
    </div>
  );
};