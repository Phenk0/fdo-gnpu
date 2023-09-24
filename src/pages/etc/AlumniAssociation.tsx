import { ChangeEvent, useEffect, useState } from 'react';

import alumniAssociationList from '../../data/alimni-association-list.json';
import SearchBox from '../../features/main-container/SearchBox.tsx';

import {
  AlumniProfile,
  ImageWrapper,
  InfoWrapper
} from './AlumniAssociation.styles.tsx';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa6';

function AlumniAssociation() {
  const [searchField, setSearchField] = useState('');
  const [filteredAlumniList, setFilteredAlumniList] = useState(
    alumniAssociationList
  );
  useEffect(() => {
    const newFilteredAlumniList = alumniAssociationList.filter((alumni) =>
      alumni.name.toLowerCase().includes(searchField)
    );
    setFilteredAlumniList(newFilteredAlumniList);
  }, [searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <>
      <h2>Спілка випускників факультету</h2>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder="Шукати випускника по імені"
      />
      {filteredAlumniList.map((alumni, index) => {
        const {
          imageUrl,
          name,
          yearOfEducation,
          department,
          currentJob,
          jobTitle,
          contacts: { tel, email }
        } = alumni;
        return (
          <AlumniProfile key={index + 'alumni'}>
            <ImageWrapper>
              <img
                src={
                  imageUrl ||
                  'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/aside%2Falumni-association%2Fno-photo.webp?alt=media'
                }
                alt={name}
              />
            </ImageWrapper>
            <InfoWrapper>
              <p>
                <b>ПІБ:</b> {name}
              </p>
              <hr />
              <p>
                <b>Роки навчання:</b> {yearOfEducation}
              </p>
              <hr />
              <p>
                <b>Факультет:</b> {department}
              </p>
              <hr />
              {(currentJob || jobTitle) && (
                <>
                  <p>
                    <b>Місце роботи:</b> {currentJob}
                  </p>
                  <hr />
                  <p>
                    <b>Посада:</b> {jobTitle}
                  </p>
                  <hr />
                </>
              )}
              <div>
                <p>
                  <b>КОНТАКТИ:</b>
                </p>
                <ul>
                  <li>
                    <a
                      href={
                        'tel:+38' +
                        (tel.indexOf(';') === -1
                          ? tel
                          : tel.slice(0, tel.indexOf(';')))
                      }
                    >
                      <FaPhone size="1.2em" />
                      &nbsp;
                      {tel}
                    </a>
                  </li>
                  {email && (
                    <li>
                      <a
                        href={
                          'mailto:' +
                          (email.indexOf(';') === -1
                            ? email
                            : email.slice(0, email.indexOf(';')))
                        }
                      >
                        <FaRegEnvelope size="1.2em" />
                        &nbsp;
                        {email}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </InfoWrapper>
          </AlumniProfile>
        );
      })}
    </>
  );
}
export default AlumniAssociation;
