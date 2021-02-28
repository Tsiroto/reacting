import { useState } from 'react'
import CommentList from './CommentList';
import useFetch from './useFetch';

const Home = () => {
  const [butChanges, setbutChanges] = useState('Start your Journey')
  const { data: comments, isPending, error } = useFetch('http://localhost:8000/comments')


  return ( 
    <div className="home">
      <h2>Vocational Guidance</h2>
      <p className="shortDescription">Research and Assistance in choosing a career or profession or in making employment or training decicions.<br/>An example of <strong>vocational guidance</strong> is a meeting with a consultant who helps people figure out what a good job would be for them based on their skills and qualifications.</p>
      { error && <div>{ error }</div>}
      { isPending && <div className="loader"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p>..is loading</p></div>}
      {comments && <CommentList comments={comments} />}
      <p>{ butChanges }</p>
      <button onClick={() => setbutChanges('Denied!')}>Here</button>
    </div>
   );
}
 
export default Home;