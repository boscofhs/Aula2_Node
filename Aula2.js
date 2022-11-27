var http = require('http');
http.createServer(function (req, res){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<h2> Brasil 2 x 0 Sérvia </h2> <br>');
        res.write(Date().substring(16,24)+'<br>');
        res.end('Bom Dia!');

}).listen(3000);
