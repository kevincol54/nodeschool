var express = require("express");
var app = express();
app.put('/message/sha1', function(req, res){
	req.params.sha1
	res.end(	
		require('crypto')
		.createHash('sha1')
		.update(new Date().toDateString() + id)
		.digest('hex')
    )
});
app.listen(process.argv[2]);