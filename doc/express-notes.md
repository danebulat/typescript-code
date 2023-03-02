# Express Notes

### Express Application Generator:

- https://expressjs.com/en/starter/generator/html

Installation:

```
sudo npm install -g express-generator 
express -h 
```

Create a new project:

```
express --git --hbs test-app
cd test-app 
npm install 
```

### New Express Project

```
mkdir express-essentials
cd express-essentials
npm init 
npm install express nodemon
npm install --save-dev  @babel/core @babel/cli @babel/preset-env @babel/node
```

Create `.babelrc` and add:

```
touch .babelrc

{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Modify `package.json` adding:

```
"type": "module",
"start": "nodemon --experimental-json-modules --exec babel-node index.js"
```

### Response Methods 

- Responsible for transmitting information to the client.
- `.json()`: Sends a JSON response 
- `.send()`: Sends the HTTP response 
- `.download()`: Transfers the file as an attachment
- `.redirect()`: Redirects th euser to the specified path

### Built-in Middleware Functions

Middleware available to Express:
https://expressjs.com/en/resources/middleware.html

- `express.static`: Serves static assets
- `express.json`: Parses incoming requests with JSON payloads
- `express.urlencoded`: Parses incoming requests with URL-encoded payloads. 
  Based on body-parser.

Steps to send JSON-encoded body data:
- Add `app.use(express.json())` middleware
- In Postman add header `Content-Type: application/json`
- Add some JSON in Body: `{ "key": "some data" }`

Steps to send url-encoded body data:
- Add `app.use(express.urlencoded({extended: true}));`
- In Postman add header `Content-Type: application/x-www-form-urlencoded`
- Add some data in `x-www-form-urlencoded` table.

### Debuging Express 

`DEBUG=express:* node index.js`
`DEBUG=express:* node --experimental-json-modules index.js`

### Database Integration

https://expressjs.com/en/guide/database-integration.html

### Security Concerns and Best Practices 

https://expressjs.com/en/advanced/best-practice-security.html
https://letsencrypt.org/

- Make sure you're using the most up-to-date version of Express 
- Use Transport Security Layer (TLS) (letsencrypt provides free tls certificate)
- Use Helmet
- Use cookies securely
- Prevent brute-force attacks against authorization
- Ensure your dependencies are secure (`npm audit`)

