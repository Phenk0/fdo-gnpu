import { ChangeEventHandler } from 'react';
import { SearchBoxStyled } from './SearchBox.styles.tsx';

type SearchBoxProps = {
  placeHolder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

function SearchBox({ onChangeHandler, placeHolder }: SearchBoxProps) {
  return (
    <SearchBoxStyled
      type="search"
      placeholder={placeHolder}
      onChange={onChangeHandler}
    />
  );
}
export default SearchBox;
