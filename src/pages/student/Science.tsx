import ImageGallery from 'react-image-gallery';
import Announcement from '../../features/announcements/AnnouncementOld.tsx';
import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

function Science() {
  const { width, containerRef } = usePDFContainer();
  return (
    <div ref={containerRef}>
      <h2>СТУДЕНТСЬКА НАУКА</h2>
      <Announcement
        title="Особливості проведення Всеукраїнського конкурсу студентських наукових робіт з галузей знань і спеціальностей у 2022/2023 навчальному році"
        component={
          <PDFViewer
            file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/student%2Fscience%2Fletter-zvo-2023.pdf?alt=media"
            width={width}
          />
        }
        date="07 лютого 2023 року"
      />
      <Announcement
        title="Наказ МОН України «Про проведення І туру Всеукраїнського конкурсу студентських наукових робіт з галузей знань і спеціальностей у 2022/2023 навчальному році»"
        component={
          <PDFViewer
            file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/student%2Fscience%2Fnakaz-mon-ua-29-20230120.pdf?alt=media"
            width={width}
          />
        }
        date="07 лютого 2023 року"
      />
      <Announcement
        title="Глухівський національний педагогічний університет імені Олександра Довженка факультет дошкільної освіти"
        text="Запрошуємо до участі у роботі V Всеукраїнської студентської науково-практичної інтернет-конференції «Дошкільна освіта України в контексті інтеграції до Європейського освітнього простору»."
        component={
          <ImageGallery
            items={[
              {
                original:
                  'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/student%2Fscience%2Fpreschool-conference.jpg?alt=media'
              }
            ]}
            showPlayButton={false}
          />
        }
        date="03 лютого 2023 року"
        anchorTo="http://gnpu.edu.ua/index.php/ua/nauka/hrafik-konferentsii"
      />
    </div>
  );
}

export default Science;
