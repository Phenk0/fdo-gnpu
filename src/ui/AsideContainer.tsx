import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';
import ImageGallery from 'react-image-gallery';
import { FaMapLocationDot } from 'react-icons/fa6';

import ExternalLink from './ExternalLink.tsx';

import { Aside, AsideCard } from './AsideContainer.styles.tsx';

const AsideContainer = () => {
  return (
    <Aside>
      <NavLink to="/etc/announcements-all">
        <AsideCard>
          <h4>АРХІВ НОВИН</h4>
        </AsideCard>
      </NavLink>
      <AsideCard>
        <h4>ВСТУПНИКУ</h4>
        <ul>
          <li>
            <NavLink to="/entrants/news">
              Новини вступної кампанії 2023 року
            </NavLink>
          </li>
          <li>
            <NavLink to="/entrants/introduction">
              Information for foreign applicants
            </NavLink>
          </li>
          <li>
            <ImageGallery
              items={[
                {
                  original:
                    'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/entrants%2Fnews%2Fannouncement_2023-09-09_entrants-event.webp?alt=media&token=a0024ac7-8ca3-4f50-ba36-a81a2f2ccfcb'
                }
              ]}
              showPlayButton={false}
            />
          </li>
          <hr />
          <li>
            Матеріал &quot;Презентуємо освітню програму&quot;
            <ImageGallery
              items={[
                {
                  original:
                    'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Fphoto_2023-09-15_23-45-37.jpg?alt=media&token=1676a062-6f4d-49d0-b9e9-e4332812c039'
                },
                {
                  original:
                    'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Fphoto_2023-09-15_23-45-39.jpg?alt=media&token=070dc7d9-1a95-4776-a019-43232407ae0b'
                },
                {
                  original:
                    'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Fphoto_2023-09-15_23-45-41.jpg?alt=media&token=a76a8497-01a7-4ef5-bd43-7b36104b8653'
                },
                {
                  original:
                    'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Fphoto_2023-09-15_23-45-43.jpg?alt=media&token=7b7b090c-43c6-419d-887b-3274702ebdad'
                },
                {
                  original:
                    'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Fphoto_2023-09-15_23-45-45.jpg?alt=media&token=7583435f-8b6c-4ac2-8d4a-c77132e56ef8'
                },
                {
                  original:
                    'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Fphoto_2023-09-15_23-45-47.jpg?alt=media&token=38285c44-b8a1-459b-bfa7-c42eb6f1d4e3'
                },
                {
                  original:
                    'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Fphoto_2023-09-15_23-45-49.jpg?alt=media&token=c9469e74-de4f-439c-851b-aec85bb936e4'
                },
                {
                  original:
                    'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Fentrants%2Fphoto_2023-09-15_23-45-51.jpg?alt=media&token=65a0141f-1cfa-4959-830d-c61ce552b05e'
                }
              ]}
              // showPlayButton={false}
              autoPlay
              slideInterval={12000}
            />
          </li>
        </ul>
      </AsideCard>

      <AsideCard>
        <h4>ЗДОБУВАЧУ ОСВІТИ</h4>
        <ul>
          <li>
            <ExternalLink
              href="http://193.169.124.188/cgi-bin/timetable.cgi"
              text="Розклад занять"
            />
          </li>
          <li>
            <NavLink to="/discipline/guest-lectures">Гостьові лекції</NavLink>
          </li>
          <li>
            <ExternalLink
              href="http://gnpu.edu.ua/index.php/ua/struktura/psykholohichna-sluzhba"
              text="Психологічна служба"
            />
          </li>
          <li>
            <NavLink to="/etc/trust-mailbox">Скринька довіри</NavLink>
          </li>
          <li>
            <NavLink to="/etc/military-record">Військовий облік</NavLink>
          </li>
        </ul>
      </AsideCard>
      <NavLink to="/discipline/programs/public-discussion">
        <AsideCard>
          <h4>ГРОМАДСЬКЕ ОБГОВОРЕННЯ ОСВІТНІХ ПРОГРАМ</h4>
        </AsideCard>
      </NavLink>
      <AsideCard>
        <h4>АКРЕДИТАЦІЯ ОСВІТНІХ ПРОГРАМ</h4>
        <ul>
          <li>
            <h5>ОПП Бакалавр</h5>
            <ul>
              <li>
                <NavLink to="/discipline/programs/preschool-physical">
                  Дошкільна освіта та фізична культура
                </NavLink>
              </li>
              <li>
                <NavLink to="/discipline/programs/physical-education-and-organization-of-sports-mass-and-tourist-work">
                  Фізична культура та організація спортивно-масової і
                  туристичної роботи
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </AsideCard>
      <AsideCard>
        <h4>СТУДЕНТИ І ВИПУСКНИКИ ПРО ФАКУЛЬТЕТ</h4>
        <ul>
          <li>
            <NavLink to="/etc/comments">Відгуки випускників</NavLink>
          </li>
          <li>
            <NavLink to="/etc/alumni-association">
              Спілка випускників факультету
            </NavLink>
          </li>
        </ul>
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
          Вітання із 148-річчам університету <b>Ященка Кирила Віталійовича</b>,{' '}
          <i>голови Глухівського військово-патріотичного клубу Мужність</i>
        </p>
      </AsideCard>
      <NavLink to="/etc/vacancies-list">
        <AsideCard>
          <h4>ЗАПИТИ РОБОТОДАВЦІВ</h4>
        </AsideCard>
      </NavLink>
      <AsideCard>
        <h4>СТУДЕНТСЬКЕ ЖИТТЯ</h4>
        <ul>
          <li>
            <NavLink to="/student/local-government">
              Студентське самоврядування
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/starostat">Старостат</NavLink>
          </li>
          <li>
            <ExternalLink
              href="http://do.gnpu.edu.ua/index.php/studentske-zhyttia/studentske-dozvillia"
              text="Студентське дозвілля"
            />
          </li>
          <li>
            <NavLink to="/student/extracurricular">
              Позанавчальна робота
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/war" id="war">
              Вони здобували перемогу
            </NavLink>
          </li>
          <li>
            <NavLink to="/student/pride">Наша гордість</NavLink>
          </li>
          <li>
            <ExternalLink
              href="http://do.gnpu.edu.ua/index.php/studentske-zhyttia/fotohalereia"
              text="Фотогалерея"
            />
          </li>
        </ul>
      </AsideCard>
      <NavLink to="/etc/map">
        <AsideCard>
          <h4>
            ЯК НАС ЗНАЙТИ&nbsp;
            <FaMapLocationDot
              size="1.5em"
              style={{ verticalAlign: 'bottom' }}
            />
          </h4>
        </AsideCard>
      </NavLink>
    </Aside>
  );
};
export default AsideContainer;
