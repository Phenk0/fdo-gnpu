import { Link } from 'react-router-dom';
import { ProgramsContainer } from './Program.styles.tsx';
import ExternalLink from '../../ui/ExternalLink.tsx';
import { FaArrowRight } from 'react-icons/fa6';

type Program = {
  title: string;
  linkTo?: string;
  path?: string;
};
type ProgramsProps = {
  title: string;
  program: Program[];
}[];
const programs21_22DO: ProgramsProps = [
  {
    title: 'ОС Бакалавр',
    program: [
      {
        title: 'Дошкільна освіта та мова і література (англійська)',
        linkTo: 'preschool-english'
      },
      {
        title: 'Дошкільна освіта та психологія'
      },
      {
        title: 'Дошкільна освіта та фізична культура'
      },
      {
        title: 'Дошкільна освіта та логопедія'
      }
    ]
  },
  {
    title: 'ОС Магістр',
    program: [
      {
        title: 'Дошкільна освіта'
      }
    ]
  }
];
const programs21_22FV: ProgramsProps = [
  {
    title: 'ОС Бакалавр',
    program: [
      {
        title:
          'Середня освіта (Фізична культура та організація спортивно масової і туристичної роботи)'
      }
    ]
  },
  {
    title: 'ОС Магістр',
    program: [
      {
        title: 'Фізична культура'
      }
    ]
  }
];

const programs22_23DO: ProgramsProps = [
  {
    title: 'ОС Бакалавр',
    program: [
      {
        title: 'Дошкільна освіта та мова і література (англійська)',
        linkTo: '/discipline/programs/preschool-english'
      },
      {
        title: 'Дошкільна освіта та психологія',
        path: '#'
      },
      {
        title: 'Дошкільна освіта та фізична культура',
        linkTo: '/discipline/programs/preschool-physical'
      },
      {
        title: 'Дошкільна освіта та логопедія',
        path: '#'
      },
      {
        title: 'Дошкільна освіта та початкова освіта'
      }
    ]
  },
  {
    title: 'ОС Магістр',
    program: [
      {
        title: 'Дошкільна освіта',
        path: '#'
      },
      {
        title: 'Дошкільна освіта та початкова освіта'
      }
    ]
  },
  {
    title: 'ОС Доктор філософії',
    program: [
      {
        title: 'Дошкільна освіта'
      }
    ]
  }
];
const programs22_23FV: ProgramsProps = [
  {
    title: 'ОС Бакалавр',
    program: [
      {
        title:
          'Середня освіта (Фізична культура та організація спортивно масової і туристичної роботи)',
        linkTo:
          '/discipline/programs/physical-education-and-organization-of-sports-mass-and-tourist-work'
      }
    ]
  },
  {
    title: 'ОС Магістр',
    program: [
      {
        title: 'Фізична культура',
        path: '#'
      }
    ]
  }
];

export const programs23_24DO: ProgramsProps = [
  {
    title: 'ОС Бакалавр',
    program: [
      {
        title: 'Дошкільна освіта та мова і література (англійська) (ПРОЄКТ)',
        path: 'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F23-24%2F%D0%9E%D0%9F_%D0%94%D0%BE%D1%88%D0%BA%D1%96%D0%BB%D1%8C%D0%BD%D0%B0_%D0%BE%D1%81%D0%B2%D1%96%D1%82%D0%B0_%D1%82%D0%B0_%D0%BC%D0%BE%D0%B2%D0%B0_%D1%96_%D0%BB%D1%96%D1%82%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0_%D0%B0%D0%BD%D0%B3%D0%BB%D1%96%D0%B9%D1%81%D1%8C%D0%BA%D0%B0.pdf?alt=media&token=450a656d-b9a0-4153-ad60-e31b59520239'
      },
      {
        title: 'Дошкільна освіта та психологія (ПРОЄКТ)',
        path: 'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F23-24%2F%D0%9E%D0%9F%D0%9F_%D0%94%D0%BE%D1%88%D0%BA%D1%96%D0%BB%D1%8C%D0%BD%D0%B0_%D0%BE%D1%81%D0%B2%D1%96%D1%82%D0%B0_%D1%82%D0%B0_%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%8F.pdf?alt=media&token=9ed3eae9-f7f6-493c-8df0-e31fbc1df5e9'
      },
      {
        title: 'Дошкільна освіта та фізична культура (ПРОЄКТ)',
        linkTo: '/discipline/programs/preschool-physical'
      },
      {
        title: 'Дошкільна освіта та логопедія (ПРОЄКТ)',
        path: 'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F23-24%2F%D0%9E%D0%9F%D0%9F_%D0%94%D0%BE%D1%88%D0%BA%D1%96%D0%BB%D1%8C%D0%BD%D0%B0_%D0%BE%D1%81%D0%B2%D1%96%D1%82%D0%B0_%D1%82%D0%B0_%D0%BB%D0%BE%D0%B3%D0%BE%D0%BF%D0%B5%D0%B4%D1%96%D1%8F.pdf?alt=media&token=b8cc5f2c-b2b9-4980-9c12-524812963111'
      },
      {
        title: 'Дошкільна освіта та початкова освіта (ПРОЄКТ)',
        path: 'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F23-24%2F%D0%9E%D0%9F%D0%9F%20%D0%B1%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%202023%20%D0%94%D0%9E-%D0%9F%D0%9E.pdf?alt=media&token=35642c9f-9ebb-4b7a-b0de-3795d9a996a2'
      }
    ]
  },
  {
    title: 'ОС Магістр',
    program: [
      {
        title: 'Дошкільна освіта',
        path: 'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F23-24%2F%D0%9E%D0%9F%D0%9F%20%D0%BC%D0%B0%D0%B3%D1%96%D1%81%D1%82%D1%80%20%D0%94%D0%9E%202023.pdf?alt=media&token=9cc8c593-d9fe-4222-973d-9fad9bd32975'
      },
      {
        title: 'Дошкільна освіта та початкова освіта',
        path: 'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F23-24%2F%D0%9E%D0%9F%D0%9F%20%D0%BC%D0%B0%D0%B3%D1%96%D1%81%D1%82%D1%80%20%D0%94%D0%9E%20%D0%9F%D0%9E%202023.pdf?alt=media&token=06a10dcb-9524-44fd-a268-680da0ba453a'
      }
    ]
  }
];
export const programs23_24FV: ProgramsProps = [
  {
    title: 'ОС Бакалавр',
    program: [
      {
        title:
          'Середня освіта (Фізична культура та організація спортивно масової і туристичної роботи) (ПРОЄКТ)',
        linkTo:
          '/discipline/programs/physical-education-and-organization-of-sports-mass-and-tourist-work'
      }
    ]
  },
  {
    title: 'ОС Магістр',
    program: [
      {
        title: 'Фізична культура',
        path: 'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fprograms%2F23-24%2F%D0%9E%D0%9F%D0%9F%20%D0%BC%D0%B0%D0%B3%D1%96%D1%81%D1%82%D1%80%20%D0%A4%D0%9A.pdf?alt=media&token=6e828264-d5bc-4d99-a0f8-71f7b349edb1'
      }
    ]
  }
];

//todo REWRITE
export const mapPrograms = (programs: ProgramsProps) =>
  programs.map(({ title, program }, index) => (
    <ProgramsContainer key={index}>
      <h4>{title}</h4>
      <ul>
        {program.map(({ title, path, linkTo }, index) => (
          <li key={index}>
            {linkTo && (
              <Link to={linkTo} style={{ padding: 0 }}>
                {title}
              </Link>
            )}
            {path && (
              <>
                <span>{title}</span>
                <ExternalLink href={path} text="переглянути" />
              </>
            )}
            {!path && !linkTo && <span>{title}</span>}
          </li>
        ))}
      </ul>
    </ProgramsContainer>
  ));
function Programs() {
  return (
    <>
      <h2>ОСВІТНІ ПРОГРАМИ</h2>
      <h2>2023 - 2024 н.р.</h2>
      <Link to="public-discussion">
        ГРОМАДСЬКЕ ОБГОВОРЕННЯ{' '}
        <FaArrowRight size="1.2em" style={{ verticalAlign: 'bottom' }} />
      </Link>
      <h3>Спеціальність 012 Дошкільна освіта</h3>
      {mapPrograms(programs23_24DO)}
      <h3>Спеціальність 014 Середня освіта (Фізична культура)</h3>
      {mapPrograms(programs23_24FV)}

      <h2>2022 - 2023 н.р.</h2>
      <h3>Спеціальність 012 Дошкільна освіта</h3>
      {mapPrograms(programs22_23DO)}
      <h3>Спеціальність 014 Середня освіта (Фізична культура)</h3>
      {mapPrograms(programs22_23FV)}

      <h2>2021 - 2022 н.р.</h2>
      <h3>Спеціальність 012 Дошкільна освіта</h3>
      {mapPrograms(programs21_22DO)}
      <h3>Спеціальність 014 Середня освіта (Фізична культура)</h3>
      {mapPrograms(programs21_22FV)}
    </>
  );
}
export default Programs;
