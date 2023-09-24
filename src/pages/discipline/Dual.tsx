import DualStudentsList from '../../data/dual-students-list.json';
import { Table } from './SelectiveOk.styles.tsx';
import ExternalLink from '../../ui/ExternalLink.tsx';
function Dual() {
  return (
    <>
      <h2>ДУАЛЬНА ОСВІТА</h2>
      <p>
        Перелік закладів освіти для впровадження упродовж 2019-2023 рр.
        пілотного проєкту з підготовки фахівців за дуальною формою здобуття
        освіти за обраними спеціальностями (Наказ МОН України  №991 від
        15.09.2021 «Про внесення змін до наказу Міністерства освіти і науки
        України від 15 жовтня 2019 1296»{' '}
        <ExternalLink
          href="https://nmc-vfpo.com/wp-content/uploads/2019/09/nakaz-mon-991-15.09.2021-zminy-do-1296-1_compressed.pdf"
          text="ознайомитися"
        />
      </p>
      <p>
        Положення про дуальну форму здобуття освіти в Глухівському національному
        педагогічному університеті імені Олександра Довженка
        <ExternalLink
          href="https://drive.google.com/file/d/1oqL5FhIm1Oe5ORzWzdQyhstk68qqP2zF/view"
          text="ознайомитися"
        />
      </p>
      <h3>Список студентів, що здобувають освіту за дуальною формою</h3>
      <Table style={{ maxWidth: 'unset' }}>
        <thead>
          <tr>
            <th>№</th>
            <th>ПІБ, група, телефон</th>
            <th>Назва закладу працевлаштування, посада</th>
            <th>Місце знаходження закладу</th>
          </tr>
        </thead>
        <tbody>
          {DualStudentsList.map(({ name, employment, address }, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{name}</td>
              <td>{employment}</td>
              <td>{address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Dual;
