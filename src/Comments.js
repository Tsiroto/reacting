import CommentList from './CommentList';
import useFetch from './useFetch';
import { Link } from 'react-router-dom'

const Comments = () => {
  const { data: comments, isPending, error } = useFetch('http://localhost:8000/comments')

  return ( 
    <div className="comments">
      { error && <div>{ error }</div>}
      { isPending && <div className="loader"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div><p>..is loading</p></div>}
      { comments && <CommentList comments={comments} /> }
      <Link to="/create"><button>New Comment</button></Link>
    </div>

    

   );
}
 
export default Comments;


