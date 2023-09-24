import {
  AnnouncementWithFloatImageGallery,
  ScalableParagraph
} from './DifferentAnnosElements.styles.tsx';
import ImageGallery from 'react-image-gallery';
import { AdditionalInformation } from '../../features/announcements/DynamicAnnouncement.styles.tsx';
import AnnounceDate from '../../features/announcements/AnnounceDate.tsx';

function Ann20230315CongratulationsZahorodniaL() {
  return (
    <>
      <AnnouncementWithFloatImageGallery>
        <ImageGallery
          items={[
            {
              original:
                'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/about%2Fkdpp%2Fzahorodnia-liudmyla.webp?alt=media'
            }
          ]}
          showPlayButton={false}
        />
        <h2>Вітаємо</h2>
        <ScalableParagraph>
          <strong>Загородню Людмилу Петрівну</strong>,
          <br />
          доктора педагогічних наук, доцента, завідувача кафедри дошкільної
          педагогіки і психології Глухівського НПУ ім.О.Довженка із перемогою у
          щорічному <strong>Конкурсі освітніх технологій</strong> із публікацією
          «Відкриваємо таємниці весняної природи».
        </ScalableParagraph>
        <ScalableParagraph>
          <em>Бажаємо подальших успіхів і творчої наснаги.</em>
        </ScalableParagraph>
      </AnnouncementWithFloatImageGallery>
      <hr />
      <AdditionalInformation>
        <AnnounceDate date="2023-03-15" />
      </AdditionalInformation>
    </>
  );
}
export default Ann20230315CongratulationsZahorodniaL;
