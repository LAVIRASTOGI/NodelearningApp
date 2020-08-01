// all read/write/append/delte file asynchronusly
//read file
//    const fs = require('fs');
//    fs.readFile("filesREad/data.txt", { encoding: 'utf8' }, (err, data) => {
//        if (err) {
//            console.log("Error : ", err);
//        } else {
//            console.log(data.toString());
//        }
//    })

//    //write a file

//    fs.writeFile('filesREad/data.txt', "hello Node", 'utf8', (err) => {
//        if (err) {
//            console.log(err)
//        }
//    })

//    //append file
//    fs.appendFile('filesREad/data.txt', "hello Node 1", 'utf8', (err) => {
//        if (err) {
//            console.log(err)
//        }
//    });

//    fs.appendFile('filesREad/data.txt', "hello Node 2", 'utf8', (err) => {
//        if (err) {
//            console.log(err)
//        }
//    });

//delete file 
// const fs = require('fs');
// fs.unlink('filesREad/ss.txt', (err) => {
//     if (err) {
//         console.log('Error:', err);
//     } else {
//         console.log('file deleted successfully');
//     }

// })