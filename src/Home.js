import { useState } from 'react'
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'

const Home = () => {
  const [butChanges, setbutChanges] = useState('Start your Journey')


  return ( 
    <div className="home">
      <h2>Vocational Guidance</h2>
      <p className="shortDescription">Research and Assistance in choosing a career or profession or in making employment or training decicions.<br/>An example of <strong>vocational guidance</strong> is a meeting with a consultant who helps people figure out what a good job would be for them based on their skills and qualifications.</p>
      <p>{ butChanges }</p>
      <Link to="/wizard">
        <Button className="toWizard" variant="contained" color="primary" onClick={() => setbutChanges('Denied!')}>
          Here
        </Button>
      </Link>
    </div>
   );
}
 
export default Home;