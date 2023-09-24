import { useState } from 'react';
import GoBackButton from '../../ui/GoBackButton.tsx';
import ExternalLink from '../../ui/ExternalLink.tsx';
import { ShadowedBlock } from '../../styles/GlobalStyles.ts';
import ProgramMainInfo from './ProgramMainInfo.tsx';

import programsInfo from './accreditation-programs.json';
import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';
import { FaChevronDown, FaRegEnvelope } from 'react-icons/fa6';

import {
  AccreditationList,
  ClickableH4,
  ListItemWithInlineUnorderedList,
  WorksListWrapper
} from './Program.styles.tsx';

function PreschoolPhysicalProgram() {
  const [closeRecommendation, setCloseRecommendation] = useState(true);
  const { width, containerRef } = usePDFContainer();

  return (
    <>
      <GoBackButton position="start" />
      <ProgramMainInfo programInfo={programsInfo.preschoolPhysical} />
      <AccreditationList>
        <li>
          <h3>2023 - 2024 н.р.</h3>
        </li>
        <li>
          <h3>Громадське обговорення освітніх програм</h3>
          <ShadowedBlock>
            <p>
              Пропонується до обговорення проєкт ОПП Дошкільна освіта та фізична
              культура зі спеціальності 012 Дошкільна освіта.
            </p>
            <p>
              Пропозиції та зауваження просимо надсилати. керівнику проєктної
              групи з розробки освітньо-професійної програми канд. наук з
              фізичного виховання і спорту, доценту кафедри теорії і методики
              дошкільної освіти Хлус Наталії Олександрівні на адресу{' '}
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
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F23-24%2F%D0%9E%D0%9F%D0%9F%20%D0%94%D0%BE%D1%88%D0%BA%D1%96%D0%BB%D1%8C%D0%BD%D0%B0%20%D1%82%D0%B0%20%D1%84%D1%96%D0%B7%D0%B8%D1%87%D0%BD%D0%B0%20%D0%BA%D1%83%D0%BB%D1%8C%D1%82..pdf?alt=media&token=60763e0a-7a2e-440b-a4cc-fff7d4f1ee59"
                text="ПРОЄКТ ОПП «Дошкільна освіта та фізична культура» 2023-2024 н.р."
              />
            </p>
          </ShadowedBlock>
          <ul>
            <li>
              Обговорення освітньої програми зі стейкхолдерами{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Faccreditation-preschool-physical%2F%D0%97%D0%B0%D1%96%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F%20%D0%B3%D0%B0%D1%80%D0%B0%D0%BD%D1%82%D1%96%D0%B2%20%D0%9E%D0%9F%D0%9F.docx?alt=media&token=ee2ada18-e35c-48eb-9ae2-be6b83c898f3"
                text="переглянути"
              />
            </li>
            <li>
              Обговорення освітньої програми зі здобувачами освіти{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Faccreditation-preschool-physical%2F%D0%9E%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%9E%D0%9F%D0%9F.docx?alt=media&token=7b6dd75d-6ca7-4937-8335-94af1ee30a98"
                text="переглянути"
              />
            </li>
            <li>
              Обговорення освітньої програми з академічною спільнотою{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Faccreditation-preschool-physical%2F%D0%97%D1%83%D1%81%D1%82%D1%80%D1%96%D1%87_%D0%B7_%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D1%96%D1%87%D0%BD%D0%BE%D1%8E_%D1%81%D0%BF%D1%96%D0%BB%D1%8C%D0%BD%D0%BE%D1%82%D0%BE%D1%8E.docx?alt=media&token=00c1ff40-8423-4bf2-aaea-0829d2d28484"
                text="переглянути"
              />
            </li>
            <li>
              Аналітичний звіт за результатами опитування стейкхолдерів{' '}
              <ExternalLink
                href="https://drive.google.com/file/d/16WUOhxbL0KeYhksm5qI0xWZJFPWgRik-/view"
                text="переглянути"
              />
            </li>
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
          ОПП «Дошкільна освіта та фізична культура»{' '}
          <ExternalLink
            href="https://drive.google.com/file/d/1UaohAn91DiM8pg-XBPJofC09wkXXwVvp/view"
            text="переглянути"
          />
        </li>
        <ListItemWithInlineUnorderedList>
          <p>Навчальний план</p>
          <ul>
            <li>
              <ExternalLink
                href="https://docs.google.com/spreadsheets/d/1w6u2g0dYGKp4tIQ-Sq9s1U1_Y2eA6Mz0/edit?usp=drive_link&ouid=103605809599441391797&rtpof=true&sd=true"
                text="для денної форми навчання"
              />
            </li>
            <li>
              <ExternalLink
                href="https://docs.google.com/spreadsheets/d/184wyWcdK3jkAu1DJiF_sqoXGaWVOI6Nz/edit?usp=drive_link&ouid=103605809599441391797&rtpof=true&sd=true"
                text="для заочної форми навчання"
              />
            </li>
          </ul>
        </ListItemWithInlineUnorderedList>
        <li>
          <ul>
            <h4>Рецензії на ОПП:</h4>
            <li>
              <b>Катеринник-Соколова Любов Григорівна</b>, директор Полтавського
              дошкільного навчального закладу (ясла-садок) № 83 «Дзвіночок»
              Полтавської міської ради Полтавської області.{' '}
              <ExternalLink
                href="https://drive.google.com/file/d/1N744_y5MjJcrvawyHDXtv9bzU2BsKPHB/view?usp=drive_link"
                text="Рецензія"
              />
            </li>
            <li>
              <b>Кладієнко Є.І.</b>, завідувач Краснопільського закладу
              дошкільної освіти (ясла-садок) №2 «Колосок» Краснопільської
              селищної ради Сумської області.{' '}
              <ExternalLink
                href="https://drive.google.com/file/d/1wMvFgzavPgaGZxJAg4zIQlQYSyHDg5N0/view"
                text="Рецензія"
              />
            </li>
            <li>
              <b>Матюхіна О.В.</b>, завідувач Глухівського дошкільного
              навчального закладу (ясла-садок) «Ромашка» Глухівської міської
              ради Сумської області. <ExternalLink href="#" text="Рецензія" />
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
              Безвідривна практика (ознайомлювальна) в ЗДО
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok30_syllabus-inseparable-introductory-practice.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Практика в групах дітей раннього віку{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F%D0%A1%D0%B8%D0%BB%D0%B0%D0%B1%D1%83%D1%81_%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%B3%D1%80%D1%83%D0%BF%D0%B0%D1%85_%D0%B4%D1%96%D1%82%D0%B5%D0%B9_%D1%80%D0%B0%D0%BD%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D0%B2%D1%96%D0%BA%D1%83_ZRAZOK.pdf?alt=media&token=5b1328ac-3ec1-4642-a307-41b78fae6824"
                text="переглянути"
              />
            </li>
            <li>
              Літня оздоровча практика в ЗДО{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok32_syllabus-summer-health-practice.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Навчальна практика в ЗДО{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok33_syllabus-study-practice-in-zdo.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Методична практика в ЗДО{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok34_syllabus-methodic-practice-in-zdo.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Навчальна практика в ЗДО на робочому місці методиста з фізичної
              культури <ExternalLink href="#" text="переглянути" />
            </li>
            <li>
              Методична практика в ЗДО на робочому місці методиста з фізичної
              культури <ExternalLink href="#" text="переглянути" />
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <h4>Програми кваліфікаційних екзаменів:</h4>
            <li>
              Кваліфікаційний екзамен зі спеціальності 012 Дошкільна освіта
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok37_qualification-exam-specialty-012-preschool-education.pdf?alt=media"
                text="переглянути"
              />
            </li>
          </ul>
        </li>
      </AccreditationList>
      <GoBackButton position="end" />
    </>
  );
}

export default PreschoolPhysicalProgram;
