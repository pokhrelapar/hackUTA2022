import express, { request } from 'express'
import cors from 'cors'
// import loginRoutes from './routes/login.js' -- example

const app = express();

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use(cors()) 
// routes must be under the parser otherwise it gets data that is un-parsed

app.all("/", function(req, res, next) {
    req.header("Origin", "http://localhost:3000/");
    return next();
});
// routes under here for CORS
// app.use('/login', loginRoutes) - example

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{console.log('Server running on Port ' + PORT)})
