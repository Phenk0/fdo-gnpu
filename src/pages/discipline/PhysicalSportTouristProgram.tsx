import { useState } from 'react';
import GoBackButton from '../../ui/GoBackButton.tsx';
import {
  AccreditationList,
  ClickableH4,
  ListItemWithInlineUnorderedList,
  WorksListWrapper
} from './Program.styles.tsx';
import { ShadowedBlock } from '../../styles/GlobalStyles.ts';
import ExternalLink from '../../ui/ExternalLink.tsx';
import ProgramMainInfo from './ProgramMainInfo.tsx';

import programsInfo from './accreditation-programs.json';
import { FaChevronDown, FaRegEnvelope } from 'react-icons/fa6';
import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

const PhysicalSportTouristProgram = () => {
  const { width, containerRef } = usePDFContainer();
  const [closeRecommendation, setCloseRecommendation] = useState(true);
  return (
    <>
      <GoBackButton position="start" />
      <ProgramMainInfo programInfo={programsInfo.physicalSportTourist} />
      <AccreditationList>
        <li>
          <h3>2023 - 2024 н.р.</h3>
        </li>
        <li>
          <h3>Громадське обговорення освітніх програм</h3>
          <ShadowedBlock>
            <p>
              Пропонується до обговорення проєкт ОПП «Середня освіта (Фізична
              культура та організація спортивно-масової і туристичної роботи)».
            </p>
            <p>
              Пропозиції та зауваження просимо надсилати до 20.06.2023 р.
              керівнику робочої групи з розробки освітньо-професійної програми
              кандидату наук з фізичного виховання і спорту, доценту кафедри
              теорії і методики фізичного виховання Бутенко Галині Олександрівні
              на адресу{' '}
              <a href="mailto:dfdo@gnpu.edu.ua">
                dfdo@gnpu.edu.ua{' '}
                <FaRegEnvelope
                  size="1.2em"
                  style={{ verticalAlign: 'bottom' }}
                />
              </a>
            </p>
            <p>
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F23-24%2F%D0%9E%D0%9F%D0%9F%20%D0%B1%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%20%D0%A4%D0%9A.pdf?alt=media&token=b73b20f3-a120-4d99-81ae-f81465ea71fb"
                text="ПРОЄКТ ОПП «Середня освіта (Фізична культура та організація спортивно-масової і туристичної роботи)» 2023-2024 н.р."
              />
            </p>
          </ShadowedBlock>
          <ul>
            <li>
              Обговорення освітньої програми зі стейкхолдерами{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Faccreditation-physical-sport-tourist%2F12_04_2023_%D0%97%D1%83%D1%81%D1%82%D1%80%D1%96%D1%87_%D0%B7%D1%96_%D1%81%D1%82%D0%B5%D0%B9%D0%BA%D1%85%D0%BE%D0%BB%D0%B4%D0%B5%D1%80%D0%B0%D0%BC%D0%B8.pdf?alt=media&token=79e1afc1-2f5e-4ed7-83d6-ac2ee7608929"
                text="переглянути"
              />
            </li>
            <li>
              Обговорення освітньої програми зі здобувачами освіти{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Faccreditation-physical-sport-tourist%2F17_05_23_%D0%A0%D0%BE%D0%B7%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%B5_%D0%B7%D0%B0%D1%81%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F_%D0%BE%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F_%D0%9E%D0%9F%D0%9F.pdf?alt=media&token=bff32565-0483-422b-8c52-ce4d648af03b"
                text="переглянути"
              />
            </li>
            <li>
              Обговорення освітньої програми з академічною спільнотою{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Faccreditation-physical-sport-tourist%2F10_05_%D0%97%D1%83%D1%81%D1%82%D1%80%D1%96%D1%87_%D0%B7_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%87%D0%BD%D0%BE%D1%8E_%D1%81%D0%BF%D1%96%D0%BB%D1%8C%D0%BD%D0%BE%D1%82%D0%BE%D1%8E.pdf?alt=media&token=ed87b4e7-b506-45d1-8d6f-cb80e8ccf669"
                text="переглянути"
              />
            </li>
            <li>
              Аналітичний звіт за результатами опитування стейкхолдерів{' '}
              <ExternalLink
                href="https://drive.google.com/file/d/16WUOhxbL0KeYhksm5qI0xWZJFPWgRik-/view"
                text="переглянути"
              />
            </li>{' '}
            <li>
              Результати опитування здобувачів освіти{' '}
              <ExternalLink
                href="https://docs.google.com/document/d/1Tqui4smhzX4B56zXU3jWuQzW2qCTYVXU/edit?usp=drive_link&ouid=103605809599441391797&rtpof=true&sd=true"
                text="переглянути"
              />
            </li>
          </ul>
        </li>
      </AccreditationList>
      <AccreditationList>
        <li>
          <h3>2022 - 2023 н.р.</h3>
        </li>
        <li>
          ОПП «Середня освіта (Фізична культура та організація спортивно-масової
          і туристичної роботи)»{' '}
          <ExternalLink
            href="https://docs.google.com/document/d/1BCSypv4ejN6juBPNh2odp6WfJT3ZuHXW/edit?usp=drive_link&ouid=103605809599441391797&rtpof=true&sd=true"
            text="переглянути"
          />
        </li>
        <ListItemWithInlineUnorderedList>
          <p>Навчальний план</p>
          <ul>
            <li>
              <ExternalLink
                href="https://docs.google.com/spreadsheets/d/1n4WfIo85jzCGWr9K_gigo5rYnmEq87Mo/edit?usp=drive_link&ouid=103605809599441391797&rtpof=true&sd=true"
                text="для денної форми навчання"
              />
            </li>
            <li>
              <ExternalLink
                href="https://docs.google.com/spreadsheets/d/1ytiXyCgUgxBvJkvt-XAuY7DFgeiPTBop/edit?usp=drive_link&ouid=103605809599441391797&rtpof=true&sd=true"
                text="для заочної форми навчання"
              />
            </li>
          </ul>
        </ListItemWithInlineUnorderedList>
        <li>
          <ul>
            <h4>Рецензії на ОПП:</h4>
            <li>
              <b>Носко Микола Олексійович</b>, доктор педагогічних наук, дійсний
              член НАПН України, заслужений діяч науки і техніки України,
              професор кафедри педагогіки, психології та методики фізичного
              виховання Національного університету «Чернігівський колегіум»
              імені Т. Г. Шевченка. <ExternalLink href="#" text="Рецензія" />
            </li>
            <li>
              <b>Сахнюк Віталій Григорович</b>, директор Кролевецького ліцею №6
              Кролевецької міської ради Сумської області.{' '}
              <ExternalLink href="#" text="Рецензія" />
            </li>
            <li>
              <b>Маринченко Едуард Олексійович</b>, директор Глухівської
              загальноосвітньої школи І-ІІІ ступенів №3 Глухівської міської ради
              Сумської області. <ExternalLink href="" text="Рецензія" />
            </li>
          </ul>
        </li>
        <li>
          <div ref={containerRef}>
            <ClickableH4
              onClick={() => setCloseRecommendation(!closeRecommendation)}
              $isClose={closeRecommendation}
            >
              Методичні рекомендації до написання курсових робіт:{' '}
              <FaChevronDown />
            </ClickableH4>
            <WorksListWrapper $isClose={closeRecommendation}>
              <PDFViewer
                file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fmethodical-recommendations.pdf?alt=media"
                width={width}
              />
            </WorksListWrapper>
          </div>
        </li>
        <li>
          <ul>
            <h4>Програми практичної підготовки здобувачів:</h4>
            <li>
              Безвідривна (ознайомлювальна) практика
              <ExternalLink href="#" text="переглянути" />
            </li>
            <li>
              Педагогічна практика на робочому місці вчителя фізичної культури{' '}
              <ExternalLink href="#" text="переглянути" />
            </li>
            <li>
              Навчально-виховна зі спортивно-масової і туристичної роботи в
              закладах оздоровлення та відпочинку{' '}
              <ExternalLink href="#" text="переглянути" />
            </li>
            <li>
              Навчально-залікова практика в ЗЗСО{' '}
              <ExternalLink href="#" text="переглянути" />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <h4>Програми кваліфікаційних екзаменів:</h4>
            <li>
              Теорія і методика фізичного виховання / захист кваліфікаційної
              роботи
              <ExternalLink href="#" text="переглянути" />
            </li>
            <li>
              Організація і методика спортивно-масової і туристичної роботи
              <ExternalLink href="#" text="переглянути" />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <h4>Акредитація</h4>
            <li>
              Відомості про самооцінювання освітньої програми
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Finformation-self-evaluation-of-the-educational-program.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Наказ про проведення акредитації{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Forder-on-accreditation.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Програма візиту експертів{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fprogram-visit-experts-09.03.2023.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Сертифікат про акредитацію ОП{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F%D0%A1%D0%B5%D1%80%D1%82%D0%B8%D1%84%D1%96%D0%BA%D0%B0%D1%82%20%20%D0%9E%D0%9F.pdf?alt=media&token=21c146a5-75b5-4a6b-a265-dcf24965b908"
                text="переглянути"
              />
            </li>
          </ul>
        </li>
      </AccreditationList>
      <GoBackButton position="end" />
    </>
  );
};
export default PhysicalSportTouristProgram;
