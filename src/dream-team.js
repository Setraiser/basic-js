module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length == 0) return false;

  let result;
  let arr = [];
  let regFindSpace = /\s+/gi;

  members.sort().forEach((item) => {
    if (typeof item === 'string') {
      item = item.replace(regFindSpace, '').substr(0,1).toUpperCase();
      arr.push(item);
    }
    
    result = arr.sort().join('');
    
  });
  return result;
};