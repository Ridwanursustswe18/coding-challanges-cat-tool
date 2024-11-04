const numberOfArguments = process.argv.length - 2;
const fs = require('fs');
if(numberOfArguments == 1){
    const fileName = process.argv[2];
    fs.readFile(fileName, 'utf8', (err, data) => {
        try{
            console.log(data);
        }catch(err){
            console.log(err);
        }
    });
}

