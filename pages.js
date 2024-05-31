// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   // Check the request URL
//   if (req.url === '/about') {
//       // Handle requests to the /about path
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/html');
//       res.write('<h1 style="color: purple">About Us</h1>');
//       res.write('<p>This is the About page.</p>');
//       res.end();
//   } else {
//       // Handle other requests (e.g., homepage)
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/html');
//       res.write('<h1 style="color: pink">Welcome</h1>');
//       res.write('<p>This is the homepage.</p>');
//       res.end();
//   }
  
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });