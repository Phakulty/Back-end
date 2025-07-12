const express = require('express');
const app = express();
const PORT = 8383;

let data = ['james'];


//middleware
app.use(express.json()); // for parsing application/json
 

//website endpoints(for sending back html)
//HTTPS VERBS && ROUTES
app.get('/', (req, res) => {
    res.send(`
        <body>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Go to Dashboard</a>
        </body>
    `);
});

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
           <h1>Welcome to the dashboard!</h1> 
           <a href="/">Go back to Home</a>
        </body>
        `);
});

//API  endpoints(for sending back JSON)
app.get('/api/data', (req, res) => {
    console.log('API data requested');
    res.send(data);
});

app.post('/api/data', (req, res) => {
    const newData = req.body;
    data.push(newData.name);
    res.sendStatus(201);
});

app.delete('/api/data/', (req, res) => {
    data.pop();
    console.log('data deleted');
    res.sendStatus(203);

})




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});