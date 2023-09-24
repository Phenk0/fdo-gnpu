import ImageGallery from 'react-image-gallery';
function Announcement20230129PostgraduateReport() {
  const images = [
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F29012022PostgraduateReport-1.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F29012022PostgraduateReport-1s.webp?alt=media'
    },
    {
      original:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F29012022PostgraduateReport-2.webp?alt=media',
      thumbnail:
        'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/announcements%2F29012022PostgraduateReport-2s.webp?alt=media'
    }
  ];
  return (
    <>
      <h2>Звіт аспірантів 1 курсу ОНП «Дошкільна освіта»</h2>
      <p>
        27.01.2023 року відбувся звіт здобувачів освітньо-наукового ступеня
        «Доктор філософії» спеціальності 012 Дошкільна освіта Тарашевської С.К.
        (керівник доктор пед.наук Загородня Л.П.) та Осадчої О.Ф. (керівник
        канд.пед.наук Куліш І.Д.). Висновок кафедри - індивідуальний план
        аспірантами за І півріччя 2022-2023 н.р. виконано. Успішних наукових
        пошуків і надалі!
      </p>
      <ImageGallery items={images} />
    </>
  );
}
export default Announcement20230129PostgraduateReport;
