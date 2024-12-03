const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
 
let users = [
    {id: 1, name: 'Alice', email: 'alice@example.com' },
    {id: 2, name: 'BOB', email: 'bob@example.com'} 
];
app.get("/users", (req,res) => res.json(users));

app.get('/users/:id', (req, res)=>{
    ser = users.find(u => u.id === parseInt(req.params.id));
    if(!users)return res.status(404).send("users not found");
    res.json(users)
});

app.listen(port, () => {
    console.log(`Application exemple à l'ecoute sur le port ${port} `)
});
