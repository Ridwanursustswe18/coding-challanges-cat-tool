const numberOfArguments = process.argv.length - 2;
const fs = require('fs');
const readline = require('node:readline');
if(numberOfArguments == 1 && (process.argv[2] == '-n' || process.argv[2] == '-b' || process.argv[2] == '-' )){
    const readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal:false,    
    });
    let inputData = '';
    let lineNumber = 1;
  readLine.on('line', (line) => {
    if(process.argv[2] == '-b'){
        if(line != ''){
            inputData += lineNumber +"  "+ line + '\n';
            lineNumber++;
        }else{
            inputData += line + '\n';
        }
    }else if(process.argv[2] == '-'){
        inputData += line + '\n';
    }
    else{
        inputData += lineNumber +"  "+ line + '\n';
        lineNumber++;
    }
  });
  readLine.on('close', () => {
    console.log(inputData);
    
  });
}
else if(numberOfArguments == 1){
    const fileName = process.argv[2];
    fs.readFile(fileName, 'utf8', (err, data) => {
        if(err){
            return err;
        }
        console.log(data);
        
    });
}
else if(numberOfArguments == 2) {
    const fileName1 = process.argv[2];
    const fileName2 = process.argv[3];
    let fileContents = '';
    Promise.all([
        new Promise((resolve, reject) => {
            fs.readFile(fileName1, 'utf8', (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        }),
        new Promise((resolve, reject) => {
            fs.readFile(fileName2, 'utf8', (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        })
    ])
    .then(([data1, data2]) => {
        fileContents = data1 + data2;
        console.log(fileContents);
    })
    .catch(err => {
        console.log(err);
    });
}