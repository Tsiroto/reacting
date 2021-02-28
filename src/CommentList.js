const CommentList = ({comments}) => {

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div className="comment-preview" key={comment.id}>
          <h4>{ comment.title }</h4>
          <p>{ comment.commentor }</p>
        </div>
      ))}
    </div>
   );
}
 
export default CommentList;