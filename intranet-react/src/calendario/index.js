import DatePicker from 'sassy-datepicker';

function Calendario() {
  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <DatePicker onChange={onChange} />
  );
}

export default Calendario;


