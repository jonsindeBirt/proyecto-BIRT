import DatePicker from 'sassy-datepicker';
// import { ThemeProvider } from 'react-bootstrap';
import "./index.css";

function Calendario() {
  const onChange = (date) => {
    console.log(date.toString());
  };

//   <ThemeProvider
//   theme={{
//     // breakpoints: ['32em', '48em', '64em'],
//     reactDatepicker: {
//       daySize: [56, 80],
//       fontFamily: 'system-ui, -apple-system',
//       colors: {
//         accessibility: '#D80249',
//         selectedDay: '#f7518b',
//         selectedDayHover: '#F75D95',
//         primaryColor: 'black',
//         backgroundColor: "lightgrey",
//       },
//     },
//   }}
// >
//   ...
// </ThemeProvider>

  return (
    
    <DatePicker onChange={onChange} />
  );
}

export default Calendario;


