const express = require('express');
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;

const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", apiRoutes);
// app.use("/api", "htmlRoutes");

app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}`);
});