import ReactPlayer from 'react-player';
import { CommentVideo } from '../../pages/etc/Comments.styles.tsx';

function CommentVideoYaschenko() {
  return (
    <CommentVideo>
      <h2>Відео-привітання із 148-річчам університету</h2>
      <ReactPlayer
        width="100%"
        height="auto"
        controls
        light={
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fcomments%2Fthumbnail-comments-yaschenko.webp?alt=media"
            alt="Thumbnail"
          />
        }
        url="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fcomments%2Fgreetings-yaschenko-k.webm?alt=media"
      />
      <p>
        <b>Ященко Кирило Віталійович</b>,{' '}
        <i>голова Глухівського військово-патріотичного клубу Мужність</i>
      </p>
    </CommentVideo>
  );
}

export default CommentVideoYaschenko;
