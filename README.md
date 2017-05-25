# Testing: REST API (fake server) and JSData

- [Install](#install)
- [Usage](#usage)

## Install

#### JS Client
For the model layer on the front end we use `js-data`. The reasoning behind is to be consistent on the fron end data model layer that can be used by different UI frameworks. For http request-response we `js-data-http` which is the HTTP adapter for JSData.
```bash
npm install js-data js-data-http
```

Or you can also use the npm package on the root on this repo.
```bash
npm install
```

To quickly serve static content from your folder, `serve` can be used. If a directory contains an index.html, `serve` will automatically render it instead of serving directory contents, and will serve any .html file as a rendered page instead of file's content as plaintext.
```bash
npm install -g serve
```

#### JSON Server
To mockup a full REST API back-end for prototyping we used json-server.
```bash
npm install -g json-server
```

## Usage

#### Run the json-server:

```bash
cd json-server
json-server generate_pcs.js
```
The API Server runs by deafault on port 3000. You can use `Postman` app to interact with the HTTP server API.
http://localhost:3000 its the home path.

#### Run the client:

```bash
cd client-jsdata
serve -p 8000 .
```

#### Testing the integration js-data client and REST API server

```js
  var adapter = new DSHttpAdapter( {
        basePath: "http://localhost:3000" // served by json-server
  });
  var store = new JSData.DS();
  store.registerAdapter('http', adapter, { default: true });
  // Define a resource by passing options
  var Product = store.defineResource({
    name: 'products' // endpoint
  });
  // Using the resource findAll to get all product list
  Product.findAll().then(function (products){
    console.log(products);
  });
  Product.findAll().then(function (products){
    console.log(products);
  });
```
Open browser develeper tools console to check the call to findAll() products defined in js code example.
