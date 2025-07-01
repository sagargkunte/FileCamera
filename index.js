const express = require('express');
const app = express();
const PORT = 8001;
app.get('/',(req,res) => {
    let absolute = __dirname + "/index.html";
    
    res.sendFile(absolute);
});
//? If you want to show in phone then open command prompt and enter the commanad ipconfig ,in that copy the IPv4 ip address and run the following link in browser
//TODO: http://IPv4_address:PORT_number
app.listen(PORT,() => {
    console.log(`App is listening at http://localhost:8001`);
})