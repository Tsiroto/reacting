import { useState } from "react";
import { useHistory } from "react-router-dom"

const Wizard = () => {
  const [name, setName] = useState('')
  const [selfing, setSelfing] = useState('')
  const [age, setAge] = useState('1980')
  const [character, setCharacter] = useState('Mario')
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = { name, selfing, age, character };

    setIsPending(true);

    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users)
    }).then(() => {
      console.log('new user added');
      setIsPending(false);
      //history.go(1);
      history.push('/wizard');
    })
  }

  return ( 
    <div className="wizard">
      <h2>This is the wizard</h2><br/>
      <p>How old is the wizard?</p><br/><br/><br/>
      <form className="formita" onSubmit={handleSubmit}>
        <label>What is your name?</label>
        <input
        type="text"
        required
        placeholder="probably not, but type your answer"
        value={name}
        onChange={(e) =>setName(e.target.value)}
        /><br/>
        <label>Tell us about yourself</label>
        <textarea 
        required 
        placeholder="Doesn't matter anyways" 
        value={selfing} 
        onChange={(e) =>setSelfing(e.target.value)}
        ></textarea><br/>
        <label>What is the year of your birth</label>
        <input
        type="number"
        required
        placeholder="4 digits"
        value={age}
        onChange={(e) =>setAge(e.target.value)}
        />
        <label>Which Mario hero do you like?</label>
        <select 
        value={character}
        onChange={(e) =>setCharacter(e.target.value)}
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
        <p><strong>Your name is:</strong> {name}</p>
        <p><strong>You said about yourself:</strong> {selfing}</p>
        <p><strong>Your age:</strong> {age}</p>
        <p><strong>Your Mario character is:</strong> {character}</p>
      </form>
      <br/><br/><br/>
    </div>
   );
}
 
export default Wizard;