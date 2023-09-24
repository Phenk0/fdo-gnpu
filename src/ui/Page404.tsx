import EmptyPage from './EmptyPage.tsx';

function Page404() {
  return (
    <EmptyPage
      title={'Помилка 404 (на цьому сайті немає сторінки за цією адресою)'}
      warning
    />
  );
}
export default Page404;
