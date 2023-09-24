import CommentCard from '../../features/main-container/CommentCard.tsx';
import CommentVideoYaschenko from '../../features/main-container/CommentVideoYaschenko.tsx';

import commentsList from '../../features/main-container/comments.json';

const orderedCommentsList = commentsList.slice().reverse();

function Comments() {
  return (
    <>
      <h2>СТУДЕНТИ І ВИПУСКНИКИ ПРО ФАКУЛЬТЕТ</h2>
      {orderedCommentsList.map((comment) => (
        <CommentCard commentItem={comment} key={comment.id} />
      ))}
      <CommentVideoYaschenko />
    </>
  );
}
export default Comments;
