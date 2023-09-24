import GoogleScholar from '../../assets/google-scholar.svg?react';
import OrcID from '../../assets/orcid-logo.svg?react';
import WoSR from '../../assets/CLVT.svg?react';
import Scopus from '../../assets/scopus.svg?react';
import RGate from '../../assets/ResearchGate.svg?react';
import Publons from '../../assets/PUBLONS.svg?react';
import { LogoContainer, SocialWrapper } from './SocialScience.styles.tsx';

export type SocialScienceProps = {
  social: {
    googleAcademy?: string;
    orcid?: string;
    WoSRID?: string;
    publons?: string;
    rGate?: string;
    scopusID?: string;
    bibliometrics?: string;
    scienceUkr?: string;
  };
};

function SocialScience({ social }: SocialScienceProps) {
  const { googleAcademy, orcid, WoSRID, scopusID, publons, rGate } = social;
  return (
    <SocialWrapper>
      {googleAcademy && (
        <LogoContainer href={googleAcademy} rel="noreferrer" target="_blank">
          <GoogleScholar />
          Google академія
        </LogoContainer>
      )}
      {orcid && (
        <LogoContainer href={orcid} rel="noreferrer" target="_blank">
          <OrcID />
          ORC<span style={{ color: 'var(--color-secondary)' }}>ID</span>
        </LogoContainer>
      )}
      {WoSRID && (
        <LogoContainer href={WoSRID} rel="noreferrer" target="_blank">
          <WoSR />
          Web of Science™
        </LogoContainer>
      )}
      {scopusID && (
        <LogoContainer href={scopusID} rel="noreferrer" target="_blank">
          <Scopus />
          Scopus
        </LogoContainer>
      )}
      {publons && (
        <LogoContainer href={publons} rel="noreferrer" target="_blank">
          <Publons />
          Publons
        </LogoContainer>
      )}
      {rGate && (
        <LogoContainer href={rGate} rel="noreferrer" target="_blank">
          <RGate />
          Research Gatе
        </LogoContainer>
      )}
    </SocialWrapper>
  );
}
export default SocialScience;
