import { Fragment } from 'react';
import educationComponents from '../../data/regulatory-ok-syllabus.json';
import { Table } from './RegulatoryOk.styles.tsx';
import ExternalLink from '../../ui/ExternalLink.tsx';

const RegulatoryOK = () => {
  return (
    <>
      <h2>НОРМАТИВНІ ОК</h2>
      <h2>Силабуси нормативних ОК 2022 рік</h2>
      <Table>
        <thead>
          <tr>
            <th>Код компонента</th>
            <th>Компоненти освітньої програми</th>
            <th>Текст</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={3}>ОБОВ'ЯЗКОВІ КОМПОНЕНТИ ОП</th>
          </tr>
          {educationComponents.map(
            ({ trainingCategory, trainingComponents }, index) => (
              <Fragment key={index}>
                <tr>
                  <th colSpan={3}>{trainingCategory}</th>
                </tr>
                {trainingComponents.map(({ code, component }, index) => (
                  <tr key={index}>
                    <th>ОК {code}</th>
                    <td>{component}</td>
                    <td>
                      <ExternalLink
                        href={`https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fregulatory-ok%2Fok${code}_syllabus.pdf?alt=media`}
                      />
                    </td>
                  </tr>
                ))}
              </Fragment>
            )
          )}
        </tbody>
      </Table>
    </>
  );
};
export default RegulatoryOK;
