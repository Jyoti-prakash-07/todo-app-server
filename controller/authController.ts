
async function Login(req, res) {
    console.log('Inside login controller');
    console.log('Got the request body for the api call', req.body);
    console.log('Got the request header for the api call', req.headers['content-type']);

    res.send(req.body);
}

async function Register(req, res) {
    console.log('Inside Register controller');
    console.log('Got the request body for the api call', req.body);
    var user;
    res.send(req.body);
}

module.exports = { Login, Register };