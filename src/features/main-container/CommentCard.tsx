import ImageGallery from 'react-image-gallery';

import { CommentWithFloatImageGallery } from '../../pages/etc/Comments.styles.tsx';

type CommentTypes = {
  commentItem: {
    id: number;
    name: string;
    text: string[];
    photos: { original: string }[];
  };
};
function CommentCard({ commentItem: { name, text, photos } }: CommentTypes) {
  return (
    <CommentWithFloatImageGallery>
      {Boolean(photos[0].original) && (
        <ImageGallery
          items={photos}
          showPlayButton={false}
          showBullets={Boolean(photos.length > 1)}
        />
      )}
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <p>З повагою, {name}</p>
    </CommentWithFloatImageGallery>
  );
}
export default CommentCard;
