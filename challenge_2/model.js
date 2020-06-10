let parseObj = (stringData) => {

  obj = JSON.parse(stringData)
  console.log("OBJ!!!!!:", obj)
  var result = '';

  let keys = (obj) => {
    let headers = ''
    for (var keys in obj){
      if(keys === 'children') {
        let head = headers.substring(0, headers.length - 1)
        head += '\n'
        result += head
        return
      }
      headers += keys + ','
    }
  }
  var deepestDepths = (obj) => {
    for (var keys in obj) {
      if(keys === 'sales'){
        result += obj[keys] + '\n'
        break;
      }
      result += obj[keys] + ','
    }
    if (obj.children) {
      for(var i = 0; i < obj.children.length; i++) {
        deepestDepths(obj.children[i])
      }
    } else {
      return;
    }
  }
  keys(obj)
  deepestDepths(obj)
  return result;
};

exports.parseObj = parseObj;