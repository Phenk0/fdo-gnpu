import { EmptyPageElement } from './EmptyPage.styles.tsx';
import { Link } from 'react-router-dom';

type EmptyPageProps = {
  title: string;
  warning?: boolean;
};
const EmptyPage = ({ title, warning = false }: EmptyPageProps) => {
  return (
    <EmptyPageElement>
      <h2>{title}</h2>
      <Link to={'/'}>
        <img
          src={
            'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/empty-page.jpg?alt=media'
          }
          alt="empty page"
        />
        {warning && <h1>404</h1>}
      </Link>
    </EmptyPageElement>
  );
};
export default EmptyPage;
