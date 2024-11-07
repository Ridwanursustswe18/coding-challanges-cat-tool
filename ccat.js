const numberOfArguments = process.argv.length - 2;
const fs = require('fs');
const readline = require('node:readline');
if(numberOfArguments == 1 && process.argv[2] == '-'){
    const readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        
    });
    let inputData = '';

  readLine.on('line', (line) => {
    inputData += line + '\n';
  });

}
else if(numberOfArguments == 1){
    const fileName = process.argv[2];
    fs.readFile(fileName, 'utf8', (err, data) => {
        try{
            console.log(data);
        }catch(err){
            console.log(err);
        }
    });
}

