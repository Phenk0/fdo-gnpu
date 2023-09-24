import regulationList from '../../data/regulation-list.json';
import ExternalLink from '../../ui/ExternalLink.tsx';
function Regulations() {
  return (
    <>
      <h2>Нормативні документи</h2>
      {regulationList.map(({ title, path }, index) => (
        <p key={index}>
          <span>{title}</span>
          <ExternalLink href={path} text="переглянути" />
        </p>
      ))}
    </>
  );
}

export default Regulations;
