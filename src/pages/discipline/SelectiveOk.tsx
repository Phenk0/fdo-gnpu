import { lazy } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Button from '../../ui/ButtonOld.tsx';

import {
  ButtonContainer,
  SelectiveOKContainer
} from './SelectiveOk.styles.tsx';

const SelectiveOkPreschool = lazy(() => import('./SelectiveOkPreschool.tsx'));
const SelectiveOkPhysical = lazy(() => import('./SelectiveOkPhysical.tsx'));

function SelectiveOk() {
  const [searchParams] = useSearchParams();

  const specialtyMode =
    searchParams.get('mode') === 'physical-education'
      ? 'physical-education'
      : 'preschool-education';

  return (
    <SelectiveOKContainer>
      <h2>ВИБІРКОВІ ОК</h2>
      <ButtonContainer>
        <Link to="?mode=preschool-education">
          <Button type="button">Для Дошкільної освіти</Button>
        </Link>
        <Link to="?mode=physical-education">
          <Button type="button">Для Середньої освіти (Фізична культура)</Button>
        </Link>
      </ButtonContainer>
      {specialtyMode === 'preschool-education' && <SelectiveOkPreschool />}
      {specialtyMode === 'physical-education' && <SelectiveOkPhysical />}
    </SelectiveOKContainer>
  );
}

export default SelectiveOk;
