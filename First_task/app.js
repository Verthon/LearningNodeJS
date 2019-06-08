const http = require("http");

const routes = {
  root: "/",
  users: "/users",
  create: "/create-users"
}

const users = ["Mariusz", "Dariusz", "Xao", "Juao"];

const html="<html><head><title>First node.js app</title></head><body><h1>Greetings!! You are using root route</h1></body></html>"

const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === "/"){   
    res.write('<html>');
    res.write('<head><title>First node.js app</title></head>');
    res.write('<body><h1>Greetings! You are on root route</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>')
    res.write('</body>')
    res.write('</html>');
    return res.end();

  }
  if(url === "/users"){
    res.write('<html>');
    res.write('<head><title>Users list</title></head>');
    res.write('<body><ul><h1>Users List</h1><li>Mariusz</li><li>Dariusz</li></ul></body>');
    res.write('</html>');
    return res.end();
  }
  if(url === "/create-user"){
    const body = [];
    req.on("data", chunk => {
      console.log("Chunk is: ", chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
    res.write('<html>');
    res.write('<head><title>First node.js app</title></head>');
    res.write('<body><h1>Create an user</h1></body>');
    res.write('</html>');
    return res.end();
  }
  //res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First node.js app</title></head>');
  res.write('<body><h1>Greetings! You are on Homepage</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);