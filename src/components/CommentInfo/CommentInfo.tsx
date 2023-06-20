import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <>
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <h1
            className="CommentInfo__name"
          >
            {comment.name}
          </h1>
          <span>{' by '}</span>
          <a
            className="CommentInfo__email"
            href={`mailto:${comment.email}`}
          >
            {comment.email}
          </a>
        </div>

        <div className="CommentInfo__body">{comment.body}</div>
      </div>
    </>
  );
};
