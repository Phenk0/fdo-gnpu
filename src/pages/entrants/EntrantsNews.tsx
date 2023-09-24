import Announcement from '../../features/announcements/AnnouncementOld.tsx';
import ReactImageGallery from 'react-image-gallery';
import ExternalLink from '../../ui/ExternalLink.tsx';

function EntrantsNews() {
  return (
    <>
      <h2>НОВИНИ ВСТУПНОЇ КАМПАНІЇ</h2>
      <ReactImageGallery
        items={[
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fnews%2Fannouncement_2023-09-09_entrants-event.webp?alt=media&token=a0024ac7-8ca3-4f50-ba36-a81a2f2ccfcb'
          }
        ]}
        showPlayButton={false}
      />
      <hr />
      <h2 style={{ color: 'crimson' }}>Підготовка до складання НМТ-2023</h2>
      <h3>
        Шановні вступники, у Вас з'явився додатковий{' '}
        <span style={{ color: 'crimson' }}>бонус</span> при вступі до нашого
        факультету!
      </h3>
      <p>
        З 1 лютого 2023 року розпочинають роботу{' '}
        <span style={{ color: 'crimson', fontWeight: 'bold' }}>
          безоплатні підготовчі курси
        </span>
        , організовані Глухівським національним педагогічним університетом імені
        Олександра Довженка для складання НМТ-2023 з таких предметів:
      </p>
      <ul>
        <li>- українська мова;</li>
        <li>- історія України;</li>
        <li>- іноземна мова (англійська);</li>
        <li>- математика;</li>
        <li>- біологія.</li>
      </ul>
      <p>
        <i>
          Курси проходитимуть <b>по суботах онлайн</b> з усіх предметів НМТ з
          подальшою можливістю <b>перегляду запису занять</b>.
        </i>
      </p>
      <p>
        По завершенню курсів Ви отримаєте сертифікат з нарахованими{' '}
        <b>додатковими балами до сертифікату НМТ</b>.
      </p>
      <p>
        <b>Що для цього треба зробити?</b>
      </p>
      <p>
        Зареєструватися за покликанням:
        <ExternalLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSfawEe18hRGhGne2uCi1OyQkZij-EE7cnR3kOQHvCvmradCtQ/viewform?vc=0&c=0&w=1&flr=0&fbclid=IwAR3UsO0ZFt88wJD7BQdQNuzX6nTGTru4UvTV65ZdjIApEbBqpU59KgMqdY8."
          title="Перейти для реєстрації"
          text="перейти"
        />
      </p>
      <Announcement
        imageUrl="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2Fannouncement-courses-28-01-23.webp?alt=media"
        description="Дистанційні підготовчі курси"
      />
    </>
  );
}
export default EntrantsNews;
