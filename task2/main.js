// example of some object
const obj = {
  name: 'Sergey',
  status: 
    {age: 29, married: null, id: 3, children: [null,'maybe']}
  ,
  job: [
    {company: 'VironIt', status:'trainee'}
    ]
};

findPrimitives(obj);

// function implementation
function findPrimitives(object) {
  let res = [];
  getProp(object);

   function getProp(o){
    for(let prop in o) {
      if((typeof(o[prop]) !== 'object') || o[prop] == null) {
        res.push(o[prop])
      } else if (typeof(o[prop]) == 'object') {
        getProp(o[prop])
      }
    } 
  } 
  return console.log(res)
}



