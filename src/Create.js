import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [commentor, setCommentor] = useState('Mario')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = { title, body, commentor };

    setIsPending(true);

    fetch('http://localhost:8000/comments', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users)
    }).then(() => {
      console.log('new comment added');
      setIsPending(false);
      //history.go(1);
      history.push('/');
    })
  }

  return ( 
    <div className="wizard">
      <h2>Add a New Comment</h2><br/><br/><br/><br/>
      <form className="formita" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
        type="text"
        required
        value={title}
        onChange={(e) =>setTitle(e.target.value)}
        /><br/>
        <label>Comment</label>
        <textarea 
        required
        value={body} 
        onChange={(e) =>setBody(e.target.value)}
        ></textarea><br/>
        <label>Select a user</label>
        <select 
        value={commentor}
        onChange={(e) =>setCommentor(e.target.value)}
        >
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
          <option value="Yoshi">Yoshi</option>
          <option value="Peach">Peach</option>
          <option value="Warrio">Warrio</option>
          <option value="Mushroom">Mushroom</option>
        </select>
        <br/>
        { !isPending && <button>Next</button> }
        { isPending && <button>Adding user..</button> }
        <br/><br/>
        {/* temp outputs */}
        <p>Your inputs:</p><br/>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Body:</strong> {body}</p>
        <p><strong>User:</strong> {commentor}</p>
      </form>
      <br/><br/><br/>
    </div>
   );
}
 
export default Create;