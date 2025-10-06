const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if (url == '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html><body><h1>This is baaza</h1></body></html>')
        return res.end();
    }

    if (url == '/message' && method == 'POST') {
        res.setHeader('Location', '/');
        res.statusCode = 302;
    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html><body><h1>Hello world</h1></body></html>')
    res.end();
};
 
module.exports =requestHandler;