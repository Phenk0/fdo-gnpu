import HeaderContacts from './AppHeaderAddress.tsx';
import { LogoContainer, Logo, Gaudeamus } from './AppHeader.styles.tsx';

const AppHeader = () => {
  return (
    <header>
      <HeaderContacts />
      <LogoContainer to="/">
        <Logo
          src="https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/logo.webp?alt=media"
          alt="Logo"
        />
        <div>
          <h1>ФАКУЛЬТЕТ ДОШКІЛЬНОЇ ОСВІТИ</h1>
          <h3>
            ГЛУХІВСЬКОГО НАЦІОНАЛЬНОГО ПЕДАГОГІЧНОГО УНІВЕРСИТЕТУ ІМЕНІ
            ОЛЕКСАНДРА ДОВЖЕНКА
          </h3>
        </div>
      </LogoContainer>
      <Gaudeamus>
        <p>
          Vivat Academia! Vivant professores! Vivat membrum quodlibet! Vivant
          membra quaelibet! Semper sint in flore!
        </p>
      </Gaudeamus>
    </header>
  );
};
export default AppHeader;
