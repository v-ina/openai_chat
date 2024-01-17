const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors')

app.use(express.json())
app.use(cors())


////////////////////////////////////////////////////// ROUTE
const  {aiResponseFromServer, aiResponse} = require('./openai_api')
app.post('/api/ai', aiResponseFromServer,aiResponse)
 

app.listen(port, () => {
  console.log(`Node.js server is running on http://localhost:${port}`);
});


