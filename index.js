const express = require('express');
//execute the contents of express and save to app variable
// for function calls and asynchronicity
const app = express();
const PORT = process.env.PORT || 3000;

//root route
app.get('/', (request, response) => {
  // response.send({ message: '.send from dumb object' });
  // response.json({ message: '.json hi from dumb object' });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
