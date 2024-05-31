const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        // Handle requests to the /about path
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: #e75480">About Us</h1>');
        res.write('<p>This is the About page.</p>');
        res.end();
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: #e75480">Contact Us</h1>');
        res.write('<p>Email: contact@example.com</p>');
        res.write('<p>Phone: 123-456-7890</p>');
        res.end();
    } else if (req.url === '/services') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: #e75480">Our Services</h1>');
        res.write('<p>1. Entrepreneurship</p>');
        res.write('<p>2. Technology</p>');
        res.write('<p>3. Authorship</p>');
        res.end();
    } else {
        // Handle other requests (e.g., homepage)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: purple">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.end();
    }
  });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });