const http = require('http');
const url = require('url');
const {parse} = require('querystring');


http.createServer((request, response) => {
    t2(request, response);
}).listen(3001);




function t2(req, res){
    if (req.method == 'GET') {
        let urlRequest = url.parse(req.url, true);
        if (urlRequest.query.test == '70') {
            res.end('800');
        }
    }
}






