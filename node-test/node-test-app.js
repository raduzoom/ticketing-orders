'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


(JSON).safeStringify = (ob, indent = 2) => {
  let cache= [];
  const retVal = JSON.stringify(
    obj,
    (key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // Duplicate reference found, discard key
          : cache.push(value) && value // Store value in our collection
        : value,
    indent
  );
  cache = null;
  return retVal;
};

// App
const app = express();
app.get('/', (req, res) => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  
  let finalOutput = '';


  finalOutput+='hello '+process.env.JWT_KEY;
  finalOutput+='<br><br>';
  finalOutput+=JSON.safeStringify(req);
  res.send(finalOutput);

});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});