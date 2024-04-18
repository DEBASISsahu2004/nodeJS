const {readFile} = require('fs');

console.log('start reading a file...');
readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('function task completed');
});

console.log(
'end of file reading...'
);