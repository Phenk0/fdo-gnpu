import { FaExternalLinkAlt } from 'react-icons/fa';

type LinkToExternalDocProps = {
  href: string;
  text?: string;
  title?: string;
};
function ExternalLink({
  href,
  text = 'Ознайомитися',
  title
}: LinkToExternalDocProps) {
  return (
    <a
      href={href}
      target={href === '#' ? '_self' : '_blank'}
      rel="noreferrer noopener"
      title={title || undefined}
    >
      {text} <FaExternalLinkAlt size="0.8em" />
    </a>
  );
}
export default ExternalLink;
