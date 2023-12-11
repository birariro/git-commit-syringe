function yyyyMMddToTimeStamp(date) {
  
  const dateObject = new Date(date);
  const timestamp = dateObject.getTime() / 1000;

  return timestamp;
}
function findFirstYearSundayDate(year) {

  for(let day = 1 ; day < 8; day++){
    const date = new Date(`${year}-01-${day}`);
    date.setUTCHours(0,0,0,0)
    const dayOfWeek = date.getDay();

    if(dayOfWeek === 0){
      return date;
    }
  }

  return process.exit();
}


module.exports = {
  yyyyMMddToTimeStamp,findFirstYearSundayDate
};