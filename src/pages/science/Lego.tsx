import ImageGallery from 'react-image-gallery';
import { LegoArticle } from './Lego.styles.tsx';

function Lego() {
  return (
    <>
      <h2>Впроваджуємо LEGO-технології</h2>
      <LegoArticle>
        <h3>Впроваджуємо технологію ігрових і діяльнісних_методів навчання</h3>
        <ImageGallery
          items={[
            {
              original:
                'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/science%2Flego%2Flego1.webp?alt=media&token=0a8238de-bc68-462b-bcc1-b2cfdef49c51'
            }
          ]}
          showPlayButton={false}
        />
        <p>
          Технологія LEGO- конструювання одна з найпоширеніших і найвідоміших
          педагогічних технологій, що широко використовує предметно-ігрове
          середовище для навчання та розвитку дитини. Перспективність
          використання цеглинок LEGO зумовлена її високими освітніми
          можливостями. Засвоєння навчального матеріалу за допомогою даної
          методики проходить легко і невимушено, дає можливість розвинути ті
          якості, які знадобляться майбутнім вихователям у професійній
          діяльності.
        </p>
        <p>
          На практичних заняттях з курсу «Педагогіка гри в закладах дошкільної
          освіти» під керівництвом канд.пед.наук Любивої В.В. студенти засвоюють
          правила роботи з LEGO цеглинками.
        </p>
        <ImageGallery
          items={[
            {
              original:
                'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/science%2Flego%2Flego11.jpg?alt=media&token=56c21f68-c222-4f81-a71d-c784004ee676'
            }
          ]}
          showPlayButton={false}
        />
      </LegoArticle>
      <LegoArticle>
        <h3>Тренінг від LEGO Foundation</h3>
        <p>
          Сучасна освіта вимагає від педагога гнучкості та грунтовної
          підготовки. При монотонному викладанні навчального матеріалу без
          ігрового осередку або маніпулюванні іграшкою, знижується концентрація
          дитячої уваги , і , як наслідок, втрачається інтерес дітей до
          освітнього процесу. Тому задача педагога зробити освітній процес
          динамічним, цікавим і максимально легким. Одним зі способів є навчання
          за допомогою шести цеглинок LEGO, в процесі якого педагог створює
          атмосферу комфорту, а діти відчувають себе творцями.
        </p>
        <p>
          З метою впровадження ігрових і діяльнісних методів навчання в освітній
          процес факультету дошкільної освіти старший викладач кафедри теорії і
          методики дошкільної освіти , кандидат пед. наук Любива Віталіна
          Вячеславівна взяла участь у навчанні LEGO-тренерів (м. Київ, 27 серпня
          2021 року.)
        </p>
        <ImageGallery
          items={[
            {
              original:
                'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/science%2Flego%2Fimage1.jpg?alt=media&token=6c45a36b-eaa3-42a7-975e-45562f0588e3',
              thumbnail:
                'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/science%2Flego%2Fimage1.jpg?alt=media&token=6c45a36b-eaa3-42a7-975e-45562f0588e3'
            },
            {
              original:
                'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/science%2Flego%2Fimage2.jpg?alt=media&token=df2e18fa-e268-4794-8da4-9f16d1e1ef05',
              thumbnail:
                'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/science%2Flego%2Fimage2.jpg?alt=media&token=df2e18fa-e268-4794-8da4-9f16d1e1ef05'
            }
          ]}
          showPlayButton={false}
        />
      </LegoArticle>
    </>
  );
}

export default Lego;
