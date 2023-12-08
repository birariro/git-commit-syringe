function yyyyMMddToTimeStamp(date) {
  
  const dateObject = new Date(date);
  const timestamp = dateObject.getTime() / 1000;

  return timestamp;
}


module.exports = {
  yyyyMMddToTimeStamp
};