import express from "express";
import cors from "cors";
import  bodyParser from 'body-parser';

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors());

const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.post( "/getSum", ( req, res ) => {
    const { number1, number2 } = req.body;
    const result = number1 + number2;
    res.status(200).json({result});
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );