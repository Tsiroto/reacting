import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";


const CommentDetails = () => {
  const { id } = useParams();
  const { data: comment, error, isPending } = useFetch('http://localhost:8000/comments/' + id);
  const history = useHistory();

  const handleClick= () => {
    fetch('http://localhost:8000/comments/' + comment.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="comment-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div>}
      { comment && (
        <article>
          <h2>{ comment.title }</h2>
          <p>By { comment.commentor }</p>
          <div>{ comment.body }</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  )
}

export default CommentDetails;