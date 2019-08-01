const arg = process.argv;
const address = arg[2];
const file = arg[3];
const request = require('request');
const fs = require('fs');

request(address, (error, response, body) => {
  console.time('Done in ');
  fs.writeFile(file,body,(err)=> {
    if (!err) {
      console.timeEnd("Done in ");
      const stats = fs.statSync(file);
      const fileSize = stats["size"];
      console.log('Downloaded and saved ' + stats.size + ' bytes to ' + file);
      
      // setTimeout(() => {
      //   const stats = fs.statSync(file);
        
      //   console.log("Found no error. Bytes = " + stats.size);

      // }, 3000);
      // console.log("no Error " + body.Buffer);
      // const stream = fs.createReadStream('./test.html');
      // console.log('Bytes = ' + stream.bytesRead);
      // const stat = fs.stats;
      // console.log("bytes = " + stream.bytesRead)
      // console.log(stream);
      // let result = fs.readFile(file,'utf8',(err,data) => {
      //   console.log(data.statSync.bytesRead);
      // })
    };

  })
  
})

