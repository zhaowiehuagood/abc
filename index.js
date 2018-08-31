const express = require('express');
const path = require('path');
const server = express();
server.get('/',(req,res)=>{
	res.send('ok')
	// res.sendFile(
	// 		path.resolve('./new/index.html')
	// 	)
});
server.listen(80);