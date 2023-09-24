import { useState } from 'react';

import {
  AccreditationList,
  ClickableH4,
  WorksListWrapper,
  ListItemWithInlineUnorderedList
} from './Program.styles.tsx';
import ExternalLink from '../../ui/ExternalLink.tsx';
import GoBackButton from '../../ui/GoBackButton.tsx';
import ProgramMainInfo from './ProgramMainInfo.tsx';
import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { ShadowedBlock } from '../../styles/GlobalStyles.ts';

import programsInfo from './accreditation-programs.json';
import { FaChevronDown, FaRegEnvelope } from 'react-icons/fa6';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';

function PreschoolEnglishProgram() {
  const { width, containerRef } = usePDFContainer();
  const [closeRecommendation, setCloseRecommendation] = useState(true);
  const [closePublicDiscussion, setClosePublicDiscussion] = useState(true);
  return (
    <>
      <GoBackButton position="start" />
      <ProgramMainInfo programInfo={programsInfo.preschoolEnglish} />
      {/*<AccreditationList>*/}
      {/*  <li>*/}
      {/*    <h3>2023 - 2024 н.р.</h3>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    Громадське обговорення ПРОЄКТУ ОПП Дошкільна освіта та мова і література*/}
      {/*    (англійська) 2023-2024н.р.*/}
      {/*    <ExternalLink*/}
      {/*      href="https://drive.google.com/file/d/1tax0wWirw_0ffXynLZoBpmFmw6FMK8nX/view"*/}
      {/*      text="переглянути ПРОЄКТ"*/}
      {/*    />*/}
      {/*  </li>*/}
      {/*</AccreditationList>*/}
      <AccreditationList>
        <li>
          <h3>2022 - 2023 н.р.</h3>
        </li>
        <li>
          ОПП «Дошкільна освіта та мова і література (англійська)» 2022 – 2023
          н.р.{' '}
          <ExternalLink
            href="https://drive.google.com/file/d/14pwmC2NKNWRFyGijCd5VdGldysmlORBi/view"
            text="(ПРОЄКТ)"
          />
        </li>
        <li>
          «Дошкільна освіта та мова і література (англійська)» 2022 - 2023 н.р.
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F15_02_2022_preschool-education-and-language-and-literature-english-OS.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <ListItemWithInlineUnorderedList>
          <p>Навчальний план</p>
          <ul>
            <li>
              <ExternalLink
                href="https://drive.google.com/file/d/1td37yr0d2nowDFAgEf_DPClr1XTHp0sG/view"
                text="для денної форми навчання"
              />
            </li>
            <li>
              <ExternalLink
                href="https://drive.google.com/file/d/1t01WJy0EvJqvWSs2By5srspA0cAgFPQ8/view"
                text="для заочної форми навчання"
              />
            </li>
          </ul>
        </ListItemWithInlineUnorderedList>
        <li>
          <ul>
            <h4>Рецензії на ОПП:</h4>
            <li>
              <span>Іщенко Людмила Валентинівна</span>, доктор педагогічних
              наук, професор, завідувач кафедри психології та педагогіки
              розвитку дитини Уманського державного педагогічного університету
              ім. П. Тичини{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Freview-ischenko-l.pdf?alt=media"
                text="Рецензія"
              />
            </li>
            <li>
              <span>Кононко Олена Леонтіївна</span>, доктор психологічних наук,
              професор, завідувач кафедри дошкільної освіти Ніжинського
              державного університету імені М. Гоголя.{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Freview-kononko-o.pdf?alt=media"
                text="Рецензія"
              />
            </li>
            <li>
              <span>Катеринник-Соколова Любов Григорівна</span>, директор
              Полтавського дошкільного навчального закладу (ясла-садок) № 83
              «Дзвіночок» Полтавської міської ради Полтавської області.{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Freview-%D0%9A%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%BD%D0%B8%D0%BA-%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%9B.%D0%93..pdf?alt=media"
                text="Рецензія"
              />
            </li>
            <li>
              <span>Самощенко Віталія Олегівна</span>, консультант Центру
              професійного розвитку педагогічних працівників Глухівської міської
              ради Сумської області.{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Freview-%D0%A1%D0%B0%D0%BC%D0%BE%D1%89%D0%B5%D0%BD%D0%BA%D0%BE%20%D0%92.%D0%9E..pdf?alt=media"
                text="Рецензія"
              />
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
              ;
            </li>
            <li>
              Практика в групах дітей раннього віку{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F%D0%A1%D0%B8%D0%BB%D0%B0%D0%B1%D1%83%D1%81_%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%B3%D1%80%D1%83%D0%BF%D0%B0%D1%85_%D0%B4%D1%96%D1%82%D0%B5%D0%B9_%D1%80%D0%B0%D0%BD%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D0%B2%D1%96%D0%BA%D1%83_ZRAZOK.pdf?alt=media&token=5b1328ac-3ec1-4642-a307-41b78fae6824"
                text="переглянути"
              />
              ;
            </li>
            <li>
              Літня оздоровча практика в ЗДО{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok32_syllabus-summer-health-practice.pdf?alt=media"
                text="переглянути"
              />
              ;
            </li>
            <li>
              Навчальна практика в ЗДО{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok33_syllabus-study-practice-in-zdo.pdf?alt=media"
                text="переглянути"
              />
              ;
            </li>
            <li>
              Методична практика в ЗДО{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok34_syllabus-methodic-practice-in-zdo.pdf?alt=media"
                text="переглянути"
              />
              ;
            </li>
            <li>
              Навчальна практика в ЗДО на робочому місці керівника гуртка
              іноземної мови (англійської){' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok35_syllabus-study-practice-in-zdo-at-workplace-of-english-group-head.pdf?alt=media"
                text="переглянути"
              />
              ;
            </li>
            <li>
              Методична практика в ЗДО на робочому місці керівника гуртка
              іноземної мови (англійської){' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok36_syllabus-methodic-practice-in-zdo-at-workplace-of-english-group-head.pdf?alt=media"
                text="переглянути"
              />
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
              ;
            </li>
            <li>
              Комплексний екзамен «Мова і література (англійська)»{' '}
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fok38_complex-exam-English-language-and-literature.pdf?alt=media"
                text="переглянути"
              />
            </li>
          </ul>
        </li>
        <li>
          <ClickableH4
            onClick={() => setClosePublicDiscussion(!closePublicDiscussion)}
            $isClose={closePublicDiscussion}
          >
            Громадське обговорення освітніх програм <FaChevronDown />
          </ClickableH4>
          <ShadowedBlock $isInset>
            <p style={{ fontSize: '0.8em' }}>
              <em>
                Пропонується до обговорення проєкт ОПП Дошкільна освіта та мова
                і література (англійська) зі спеціальності 012 Дошкільна освіта.
              </em>
            </p>
            <p style={{ fontSize: '0.8em' }}>
              <em>
                Пропозиції та зауваження просимо надсилати до 30.04.2022 р.
                керівнику проєктної групи з розробки освітньо-професійної
                програми канд.пед.наук, старшому викладачу кафедри теорії і
                методики дошкільної освіти Любивій Віталіні Вячеславівни на
                адресу
                <a href="mailto:dfdo@gnpu.edu.ua" style={{ fontSize: '1.2em' }}>
                  dfdo@gnpu.edu.ua{' '}
                  <FaRegEnvelope
                    size="1.2em"
                    style={{ verticalAlign: 'bottom' }}
                  />
                </a>
              </em>
            </p>
          </ShadowedBlock>
          <ul
            className={`discuss ${closePublicDiscussion ? 'close' : undefined}`}
          >
            <li>
              11.01.2022 Обговорення освітньої програми зі стейкхолдерами
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F11_%D1%81%D1%96%D1%87%D0%BD%D1%8F_2022_%D1%80%D0%BE%D0%BA%D1%83_%D0%A2%D1%80%D0%B8%D0%B2%D0%B0%D1%94_%D0%BE%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F_%D0%BE%D1%81%D0%B2%D1%96%D1%82%D0%BD%D1%8C%D0%BE%D1%97_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8_%D0%97%D1%83%D1%81%D1%82%D1%80%D1%96%D1%87.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              15.02.2022 Співпраця зі стейкхолдерами
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F15_02_2022%D1%80_%D0%A1%D0%BF%D1%96%D0%B2%D0%BF%D1%80%D0%B0%D1%86%D1%8F_%D0%B7%D1%96_%D1%81%D1%82%D0%B5%D0%B9%D0%BA%D1%85%D0%BE%D0%BB%D0%B4%D0%B5%D1%80%D0%B0%D0%BC%D0%B8.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              18.02.2022 Обговорення освітньої програми зі здобувачами освіти
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F18_%D0%BB%D1%8E%D1%82%D0%BE%D0%B3%D0%BE_2022_%D1%80%D0%BE%D0%BA%D1%83_%D0%9E%D0%B1%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%BD%D1%8F_%D0%BE%D1%81%D0%B2%D1%96%D1%82%D0%BD%D1%8C%D0%BE%D1%97_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8_%D1%96%D0%B7_%D0%B7%D0%B4%D0%BE%D0%B1%D1%83%D0%B2%D0%B0%D1%87%D0%B0%D0%BC%D0%B8.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              19.10.2022 Регіональний круглий стіл
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F19_10_2022%D1%80_%D0%A0%D0%B5%D0%B3%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%B8%D0%B9_%D1%81%D1%82%D1%96%D0%BB.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Практика в групах дітей раннього віку
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B0_%D0%B2_%D0%B3%D1%80%D1%83%D0%BF%D0%B0%D1%85_%D0%B4%D1%96%D1%82%D0%B5%D0%B9_%D1%80%D0%B0%D0%BD%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D0%B2%D1%96%D0%BA%D1%83.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Аналітичний звіт за результатами опитування стейкхолдерів
              <ExternalLink
                href="https://drive.google.com/file/d/16WUOhxbL0KeYhksm5qI0xWZJFPWgRik-/view"
                text="переглянути"
              />
            </li>
            <li>
              Результати опитування здобувачів освіти
              <ExternalLink
                href="https://drive.google.com/file/d/1fb6dX4WUTiDnxnHFiDbqypqigyWGT6rH/view"
                text="переглянути"
              />
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
              Наказ про проведення акредитації
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Forder-on-accreditation.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Програма візиту експертів
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2Fprogram-visit-experts-09.03.2023.pdf?alt=media"
                text="переглянути"
              />
            </li>
            <li>
              Сертифікат про акредитацію ОП
              <ExternalLink
                href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F%D0%A1%D0%B5%D1%80%D1%82%D0%B8%D1%84%D1%96%D0%BA%D0%B0%D1%82%20%20%D0%9E%D0%9F.pdf?alt=media&token=21c146a5-75b5-4a6b-a265-dcf24965b908"
                text="переглянути"
              />
            </li>
          </ul>
        </li>
      </AccreditationList>
      <AccreditationList>
        <li>
          <h3>2021 - 2022 н.р.</h3>
        </li>
        <li>
          ОПП «Дошкільна освіта та мова і література (англійська)» 2021 – 2022
          н.р.{' '}
          <ExternalLink
            href="https://drive.google.com/file/d/1_ZknihveUuTTZ5qX0tQNpZXR-idwiIj4/view"
            text="переглянути"
          />
        </li>
        <ListItemWithInlineUnorderedList>
          <p>Навчальний план</p>
          <ul>
            <li>
              <ExternalLink
                href="https://drive.google.com/file/d/1r0_UFh2pqa6IS8Ffz63sJAPj4sbEdnfZ/view"
                text="для денної форми навчання"
              />
            </li>
            <li>
              <ExternalLink
                href="https://drive.google.com/file/d/1CqK7pjTleb40BCiGNEgB12XdYFvab2N4/view"
                text="для заочної форми навчання"
              />
            </li>
          </ul>
        </ListItemWithInlineUnorderedList>

        <li>
          <ul>
            <h4>Рецензії на ОПП:</h4>
            <li>
              <span>Листопад О.А</span>,доктор педагогічних наук, професор,
              завідувач кафедри дошкільної педагогіки Державного закладу
              «Південноукраїнський національний педагогічний університет ім.
              К.Д.Ушинського.
              <ExternalLink
                href="https://drive.google.com/file/d/1mLRlCZyJrorfD_T1YSta_ZgYYvPb8wwG/view"
                text="Рецензія"
              />
            </li>
            <li>
              <span>Кладієнко Є.І.</span>, завідувач Краснопільського закладу
              дошкільної освіти (ясла-садок) №2 «Колосок» Краснопільської
              селищної ради Сумської області.
              <ExternalLink
                href="https://drive.google.com/file/d/1wMvFgzavPgaGZxJAg4zIQlQYSyHDg5N0/view"
                text="Рецензія"
              />
            </li>
            <li>
              <span>Матюхіна О.В.</span>, завідувач Глухівського дошкільного
              навчального закладу (ясла-садок) «Ромашка» Глухівської міської
              ради Сумської області.
              <ExternalLink
                href="https://drive.google.com/file/d/1XXbzQ478QHPdh_TDiywsa5EdNzsL0KDv/view"
                text="Рецензія"
              />
            </li>
            <li>
              <span>Лугова Ю.С.</span>, завідувач закладу дошкільної освіти
              (ясла-садок) «Барвінок» Котелевецької селищної ради Полтавської
              області.
              <ExternalLink
                href="https://drive.google.com/file/d/1QQ-GpVAKQIw8syhQUqUoItXG8fPGmxlh/view"
                text="Рецензія"
              />
            </li>
          </ul>
        </li>
      </AccreditationList>
      <GoBackButton position="end" />
    </>
  );
}
export default PreschoolEnglishProgram;
