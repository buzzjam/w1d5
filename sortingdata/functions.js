var arr = [];
function generateArray(input){
    arr.push(input);
    return arr;
}

function sortArray(){
  return arr.sort(function (a,b){
    return a - b;
  });
}


module.exports = {
  'generate': generateArray,
  'sort': sortArray
}