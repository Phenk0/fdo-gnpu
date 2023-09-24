import ImageGallery from 'react-image-gallery';

function Specialties() {
  return (
    <>
      <h2>
        Запрошуємо здобути освіту за спеціальністю 012 Дошкільна освіта, 014
        Середня освіта (Фізична культура) на факультеті дошкільної освіти
      </h2>
      <ImageGallery
        items={[
          {
            original:
              'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Ffdo-for-entrants.webp?alt=media'
          }
        ]}
        showPlayButton={false}
      />
    </>
  );
}

export default Specialties;
