import { Table } from './SelectiveOk.styles.tsx';
import ExternalLink from '../../ui/ExternalLink.tsx';

type Props = {
  syllabusList: {
    code: string;
    component: string;
    value: string;
    fileAddress: string;
  }[];
};
function SelectiveOkTable({ syllabusList }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Код</th>
          <th>Назва</th>
          <th>Обсяг</th>
          <th>Силабус</th>
        </tr>
      </thead>
      <tbody>
        {syllabusList.map(({ code, component, value, fileAddress }) => (
          <tr key={code}>
            <th>{code}</th>
            <td>{component}</td>
            <th>{value}</th>
            <th>{fileAddress && <ExternalLink href={fileAddress} />}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default SelectiveOkTable;
