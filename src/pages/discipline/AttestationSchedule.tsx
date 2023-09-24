import examScheduleList from '../../data/exam-schedule-list.json';
const AttestationSchedule = () => (
  <>
    <h2>
      Розклад підсумкової атестації для студентів факультету дошкільної освіти
    </h2>
    {examScheduleList.map(({ imageUrl, alt, title }, index) => (
      <p key={index}>
        <img src={imageUrl} alt={alt} title={title} style={{ width: '100%' }} />
      </p>
    ))}
  </>
);

export default AttestationSchedule;
