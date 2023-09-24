import { getDate } from './getDate.ts';

import { DateContainer } from './AnnounceDate.styles.tsx';

type AnnounceDateProps = {
  date: string;
};

function AnnounceDate({ date }: AnnounceDateProps) {
  return <DateContainer>Опубліковано: {getDate(date)}</DateContainer>;
}
export default AnnounceDate;
