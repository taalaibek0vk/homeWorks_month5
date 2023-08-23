import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormsPage() {
  const navigate = useNavigate(); 

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('https://dummyjson.com/posts', {
        title,
        body
      });
    } 


  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='post-form'>
          <label>Body: </label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </div>
      <button onClick={() => navigate(`/posts`)}>Create Post</button>

      </form>
    </div>
  );
}

export default FormsPage;