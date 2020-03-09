const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (typeof sampleActivity === 'string') {

    let reg = /^[0-9.]+$/;
    if(!reg.test(sampleActivity)) return false;

    const activity = parseFloat(sampleActivity.match(reg));

    if(activity <= 0 || activity >= 15) return false;
      
    const k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
    
  }
  return false;
};