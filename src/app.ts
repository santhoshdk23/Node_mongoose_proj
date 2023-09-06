
import * as express from 'express';
import { config } from 'dotenv';
import authRoute from './Routes/userRegister.route';
import initDatabase from './database/connection.mongo';

/*Init .env*/
config({ path: '.env.development' });

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.use('/api/v1', authRoute)

app.listen(port, async () => {
    console.log(`App is up & running at ${port}`);

    /*Initialize mongo db*/
    await initDatabase();

})







// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import userRoutes from './Routes/userRegister.route';
// import './config/database';

// const app = express();

// app.use(bodyParser.json());
// app.use(cors());

// app.use('/api/user', userRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
