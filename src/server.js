import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import bfhlRoutes from './routes/bfhl.route.js';
import { ENV_VARS } from './config/envVars.js';

dotenv.config();

const app = express();
const PORT = ENV_VARS.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/v1/bfhl", bfhlRoutes);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
