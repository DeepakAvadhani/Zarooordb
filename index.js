const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes')
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Brrrt');
});
app.use('/users', userRoutes);

app.listen(3000,()=>{
    console.log('Server is up and running!');
})