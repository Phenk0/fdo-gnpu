import { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useParams } from 'react-router-dom';

import SocialScience, { SocialScienceProps } from './SocialScience.tsx';

import {
  ProfileContainer,
  AdditionalInfo,
  MainInfo,
  ClickableH4,
  GoBackWrapper,
  CerfInfoWrapper,
  WorksListWrapper
} from './TeacherProfile.styles.tsx';
import Page404 from '../../ui/Page404.tsx';
import PDFViewer from './PDFViewer.tsx';
import GoBackButton from '../../ui/GoBackButton.tsx';
import { usePDFContainer } from './usePDFContainer.ts';
import { FaChevronDown, FaRegEnvelope } from 'react-icons/fa6';

export type TeacherProfileProps = {
  departmentPersonnel: {
    linkTo: string;
    name: string;
    jobTitle: string;
    qualification?: string;
    imageUrl: string;
    education: string[];
    degree: string[];
    dissertationTopic: string[];
    academicTitle: string[];
    awardsAndHonors: string[];
    supervision: string[];
    scientificWorksList: string;
    contacts: { email: string };
    social?: SocialScienceProps['social'];
    professionalDevelopment: string[];
    certification: { cerfInfo: string; certificates: { original: string }[] };
  }[];
};
function TeacherProfile({ departmentPersonnel }: TeacherProfileProps) {
  const { width, containerRef } = usePDFContainer();
  const { id } = useParams();
  const [closeWorksList, setCloseWorksList] = useState(true);
  const [closeCerf, setCloseCerf] = useState(true);
  const professor = departmentPersonnel.find(({ linkTo }) => linkTo === id);

  if (!professor) return <Page404 />;

  const {
    name,
    jobTitle,
    qualification,
    imageUrl,
    education,
    degree,
    dissertationTopic,
    academicTitle,
    awardsAndHonors,
    supervision,
    scientificWorksList,
    contacts: { email },
    social,
    professionalDevelopment,
    certification
  } = professor;

  return (
    <>
      <GoBackWrapper>
        <GoBackButton position="start" />
      </GoBackWrapper>
      <ProfileContainer>
        <MainInfo>
          <img src={imageUrl} alt={name} />
          <div>
            <h3>
              {name.slice(0, name.indexOf(' ')).toUpperCase()}
              <br />
              {name.slice(name.indexOf(' '))}
            </h3>
            <hr />
            {qualification && (
              <>
                <h3>{qualification}</h3>
                <hr />
              </>
            )}

            <h3>{jobTitle[0].toLowerCase() + jobTitle.slice(1)}</h3>
            <hr />
          </div>
        </MainInfo>
        <AdditionalInfo ref={containerRef}>
          <h4>Освіта:</h4>
          <ul>
            {education.map((institute, index) => (
              <li key={index}>{institute}</li>
            ))}
          </ul>
          {degree[0] && (
            <>
              <h4>Науковий ступінь:</h4>
              <ul>
                {degree.map((dg, index) => (
                  <li key={index}>{dg}</li>
                ))}
              </ul>
            </>
          )}

          {dissertationTopic[0] && (
            <>
              <h4>Тема дисертації:</h4>
              <ul>
                {dissertationTopic.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </>
          )}
          {academicTitle[0] && (
            <>
              <h4>Вчене звання:</h4>
              <ul>
                {academicTitle.map((title, index) => (
                  <li key={index}>{title}</li>
                ))}
              </ul>
            </>
          )}
          {awardsAndHonors[0] && (
            <>
              <h4> Нагороди та відзнаки:</h4>
              <ul>
                {awardsAndHonors.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </>
          )}

          {supervision[0] && (
            <>
              <h4>КЕРІВНИЦТВО ДОКТОРАНТАМИ, АСПІРАНТАМИ:</h4>
              <ul>
                {supervision.map((student, index) => (
                  <li key={index}>{student}</li>
                ))}
              </ul>
            </>
          )}
          {scientificWorksList && (
            <>
              <ClickableH4
                onClick={() => setCloseWorksList(!closeWorksList)}
                $isClose={closeWorksList}
              >
                СПИСОК НАУКОВИХ ПРАЦЬ <FaChevronDown />
              </ClickableH4>
              <WorksListWrapper $isClose={closeWorksList}>
                {containerRef.current && (
                  <PDFViewer file={scientificWorksList} width={width} />
                )}
              </WorksListWrapper>
            </>
          )}

          {email[0] && (
            <address>
              <h4>КОНТАКТНА ІНФОРМАЦІЯ:</h4>
              <FaRegEnvelope
                size="1.5em"
                style={{ verticalAlign: 'text-bottom' }}
              />
              :&nbsp;
              <a href={`mailto:${email}`}>{email}</a>
            </address>
          )}
          {social && (
            <div>
              <h4>ПРОФІЛІ У СОЦІАЛЬНИХ МЕРЕЖАХ:</h4>
              <SocialScience social={social} />
            </div>
          )}

          {professionalDevelopment[0] && (
            <>
              <h4>ПРОФЕСІЙНИЙ РОЗВИТОК ТА ДОСВІД ЕКСПЕРТНОЇ ДІЯЛЬНОСТІ:</h4>
              <ul>
                {professionalDevelopment.map((experience, index) => (
                  <li key={index}>{experience}</li>
                ))}
              </ul>
            </>
          )}
          {certification.cerfInfo && (
            <>
              <ClickableH4
                onClick={() => setCloseCerf(!closeCerf)}
                $isClose={closeCerf}
              >
                Інформація про підвищення кваліфікації <FaChevronDown />
              </ClickableH4>
              <CerfInfoWrapper $isClose={closeCerf}>
                <PDFViewer file={certification.cerfInfo} width={width} />
                <ImageGallery
                  items={certification.certificates}
                  showPlayButton={false}
                  showFullscreenButton={false}
                />
              </CerfInfoWrapper>
            </>
          )}
        </AdditionalInfo>
      </ProfileContainer>
      <GoBackWrapper>
        <GoBackButton position="end" />
      </GoBackWrapper>
    </>
  );
}
export default TeacherProfile;
