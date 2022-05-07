const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const ngoUserRoutes = require('./routes/ngoUserRoutes');
const clientUserRoute = require('./routes/clientUserRoute');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
dotenv.config();
connectDB();
const app = express();
app.use(express.json()); //to accept json data
app.get('/', (req, res) => {
    res.send("APP is running ");
})

app.use('/api/ngouser', ngoUserRoutes);
app.use('/api/clientuser', clientUserRoute);
//error handling
//middlewares
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})