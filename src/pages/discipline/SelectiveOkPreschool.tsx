import { Suspense } from 'react';
import ExternalLink from '../../ui/ExternalLink.tsx';
import SelectiveOkTable from './SelectiveOkTable.tsx';
import Spinner from '../../ui/Spinner.tsx';

import educationComponents from '../../data/selective-ok-syllabus.json';

import { TableSimple } from './SelectiveOk.styles.tsx';

function SelectiveOkPreschool() {
  return (
    <Suspense fallback={<Spinner />}>
      <h2>Вибіркові ОК спеціальності 012 Дошкільна освіта</h2>
      <h3>Шановні студенти!</h3>
      <p>
        Оголошується вибір навчальних дисциплін на 2023-2024 навчальний рік!
        <br />
        Зробіть свій вибір до 1 квітня 2023 року.
      </p>
      <p>
        Студенти 11-ДО групи (2023 року вступу) ОС «Бакалавр» мають зробити
        вибір до 1 жовтня 2023 року.
      </p>
      <h2>Каталог загальноуніверситетських дисциплін</h2>
      <p>
        <ExternalLink
          href="http://gnpu.edu.ua/index.php/ua/osvitnii-protses/kataloh-zahalnouniversytetskykh-vybirkovykh-dystsyplin"
          text="Перейти за посиланням на сайт університету"
        />
      </p>
      <p>Студенти в 5 семестрі обирають 1 дисципліну (3 кредити).</p>
      <h2>Каталог вибіркових ОК фахової підготовки</h2>
      <TableSimple>
        <tbody>
          <tr>
            <td>Студенти у</td>
            <td>4 семестрі</td>
            <td>обирають</td>
            <td>2 дисципліни (по 6 кредитів)</td>
          </tr>
          <tr>
            <td></td>
            <td>5 семестрі</td>
            <td></td>
            <td>1 дисципліну (по 6 кредитів)</td>
          </tr>
          <tr>
            <td></td>
            <td>6 семестрі</td>
            <td></td>
            <td>3 дисципліни (по 6 кредитів)</td>
          </tr>
          <tr>
            <td></td>
            <td>7 семестрі</td>
            <td></td>
            <td>2 дисципліни (по 5 кредитів)</td>
          </tr>
          <tr>
            <td></td>
            <td>8 семестрі</td>
            <td></td>
            <td>1 дисципліну (по 6 кредитів)</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>1 дисципліну (по 5 кредитів)</td>
          </tr>
        </tbody>
      </TableSimple>
      <SelectiveOkTable syllabusList={educationComponents.preschool} />
      <p>
        УВАГА!!! ДЛЯ ВИБОРУ ДИСЦИПЛІН НЕОБХІДНО ЗАПОВНИТИ ЗАЯВУ ЗА ФОРМОЮ (
        <ExternalLink
          href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fselective-ok%2F%D0%97%D0%B0%D1%8F%D0%B2%D0%B0.pdf?alt=media"
          text="форма"
        />
        )
      </p>
    </Suspense>
  );
}
export default SelectiveOkPreschool;
