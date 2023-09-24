import PDFViewer from '../../features/main-container/PDFViewer.tsx';
import { usePDFContainer } from '../../features/main-container/usePDFContainer.ts';
import ExternalLink from '../../ui/ExternalLink.tsx';

function Practices() {
  const { width, containerRef } = usePDFContainer();
  return (
    <>
      <h2>Угоди про практичну підготовку здобувачів освіти з базами практик</h2>
      <ul>
        <li>
          <div ref={containerRef}>
            <PDFViewer
              file="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B8%20%D0%BF%D1%80%D0%BE%20%D1%81%D0%BF%D1%96%D0%B2%D0%BF%D1%80%D0%B0%D1%86%D1%8E.%20%D0%92%D1%96%D0%B4%D0%B4%D1%96%D0%BB%D0%B8%20%D0%BE%D1%81%D0%B2%D1%96%D1%82%D0%B8.doc.pdf?alt=media"
              width={width}
            />
          </div>
        </li>
        <li>
          Відділ освіти Гадяцкої міської ради
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%93%D0%B0%D0%B4%D1%8F%D1%86%D0%BA%D0%B8%D0%B9%20%D0%92%D0%9E.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Відділ освіти Середино-Будської районної держ.адміністрації
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%92%D0%9E%20%D0%A1.%D0%91%D1%83%D0%B4%D1%81%D1%8C%D0%BA%D0%BE%D1%97%20%D0%A0%D0%94%D0%90.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          НВК Глухів
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%9D%D0%92%D0%9A%20%D0%93%D0%BB%D1%83%D1%85%D1%96%D0%B2.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          НВК Кролевець
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%9D%D0%92%D0%9A%20%D0%9A%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D0%B5%D1%86%D1%8C.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Путивльський ЗДО №4
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%9F%D1%83%D1%82%D0%B8%D0%B2%D0%BB%D1%8C%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%97%D0%94%D0%9E%204.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Сумський ЗДО Метелик
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%A1%D1%83%D0%BC%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%97%D0%94%D0%9E%20%D0%9C%D0%B5%D1%82%D0%B5%D0%BB%D0%B8%D0%BA.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Управління освіти Глухівської міської ради
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%92%D0%9E%20%D0%93%D0%BB%D1%83%D1%85%D1%96%D0%B2.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Управління освіти Кролевецької міської ради{' '}
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%92%D0%9E%20%D0%9A%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D0%B5%D1%86%D1%8C.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Угода Глухів
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%93%D0%BB%D1%83%D1%85%D1%96%D0%B2.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Угода Глухівська РДА
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D1%83%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%93%D0%BB%D1%83%D1%85%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%A0%D0%94%D0%90.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Угода Путивль пед коледж
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%9F%D1%83%D1%82%D0%B8%D0%B2%D0%BB%D1%8C%20%D0%BF%D0%B5%D0%B4%20%D0%BA%D0%BE%D0%BB%D0%B5%D0%B4%D0%B6.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Угода Путивль РДА
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%9F%D1%83%D1%82%D0%B8%D0%B2%D0%BB%D1%8C%20%D0%A0%D0%94%D0%90.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Угода С-Буда
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%A1-%D0%91%D1%83%D0%B4%D0%B0.pdf?alt=media"
            text="переглянути"
          />
        </li>
        <li>
          Угода Шосткинська ДА
          <ExternalLink
            href="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fpractices%2F%D0%A3%D0%B3%D0%BE%D0%B4%D0%B0%20%D0%A8%D0%BE%D1%81%D1%82%D0%BA%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%20%D0%94%D0%90.pdf?alt=media"
            text="переглянути"
          />
        </li>
      </ul>
    </>
  );
}
export default Practices;
