const fs = require('fs-extra')
var path='../assets/Avatars'
console.log('vai chamar');
fs.readdir(path, function(err, items) {
  console.log(items);
  
  // for (var i=0; i<items.length; i++) {
  //     console.log(items[i]);
  // }
});
