import { Link } from 'react-router-dom';
import ExternalLink from './ExternalLink.tsx';
import { FaPhone } from 'react-icons/fa6';

import { Address } from './AppHeaderAddress.styles.tsx';
import { BsEnvelopeAt } from 'react-icons/bs';

const HeaderContacts = () => {
  return (
    <Address>
      <a href="tel:+380953526896">
        <FaPhone size="1.2em" style={{ verticalAlign: 'text-bottom' }} />
        &nbsp;+380953526896
      </a>
      <a href="mailto:dfdo@gnpu.edu.ua">
        <BsEnvelopeAt size="1.2em" style={{ verticalAlign: 'text-bottom' }} />
        &nbsp;dfdo@gnpu.edu.ua
      </a>
      <Link to="/" className="optional">
        Вітаємо на сайті Факультету
      </Link>
      <ExternalLink href="http://do.gnpu.edu.ua/" text="Старий сайт" />
    </Address>
  );
};
export default HeaderContacts;
