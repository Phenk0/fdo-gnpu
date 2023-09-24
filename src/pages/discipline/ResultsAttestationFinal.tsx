const finalAttestationResultsList = [
  {
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fstudy-results%2Fresults-attestation-final-online.jpeg?alt=media',
    altName: 'Результати підсумкової атестації',
    title: 'Денна форма навчання'
  },
  {
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/fdo-gnpu.appspot.com/o/discipline%2Fstudy-results%2Fresults-attestation-final-offline.jpeg?alt=media',
    altName: 'Результати підсумкової атестації',
    title: 'Заочна форма навчання'
  }
];
const FinalAttestation = () => (
  <>
    <h2>Результати підсумкової атестації здобувачів освіти</h2>
    {finalAttestationResultsList.map(({ imageUrl, altName, title }, index) => (
      <p key={index}>
        <img src={imageUrl} alt={altName} title={title} />
      </p>
    ))}
  </>
);

export default FinalAttestation;
