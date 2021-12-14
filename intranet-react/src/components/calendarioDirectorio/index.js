import DatePicker from 'sassy-datepicker';
import "./index.css";

function Calendario() {
  const onChange = (date) => {
    console.log(date.toString());
  };

   

  return (
    
    <DatePicker className='calendario' onChange={onChange} />
  );
}

export default Calendario;


