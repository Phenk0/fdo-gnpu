import { Link } from 'react-router-dom';
import SocialScience from './SocialScience.tsx';

import { HeadingDepartment } from './Department.styles.tsx';
import { DeanerySection, Teacher } from '../../pages/about/Deanery.styles.tsx';
import { TeacherProfileProps } from './TeacherProfile.tsx';
import { HiLink } from 'react-icons/hi2';

type DepartmentProps = {
  title: string;
  departmentPersonnel: TeacherProfileProps['departmentPersonnel'];
};
const Department = ({ departmentPersonnel, title }: DepartmentProps) => (
  <>
    <h2>{title}</h2>
    <DeanerySection>
      {departmentPersonnel.map((professor, index) => {
        const {
          name,
          jobTitle,
          qualification,
          imageUrl,
          contacts: { email },
          social,
          linkTo
        } = professor;
        return (
          <Teacher key={index}>
            <h3>{name}</h3>
            <img src={imageUrl} alt={name} />
            <h3>{jobTitle}</h3>
            {qualification && (
              <HeadingDepartment>{qualification}</HeadingDepartment>
            )}
            {email && (
              <address>
                <HeadingDepartment>Контакти:</HeadingDepartment>
                ел.пошта:&nbsp;<a href={`mailto:${email}`}>{email}</a>
              </address>
            )}
            {social && (
              <div>
                <HeadingDepartment>Соціальні мережі:</HeadingDepartment>
                <SocialScience social={social} />
              </div>
            )}
            <br />
            {linkTo && (
              <Link to={linkTo}>
                Докладніше <HiLink size="0.8em" />
              </Link>
            )}
          </Teacher>
        );
      })}
    </DeanerySection>
  </>
);

export default Department;
