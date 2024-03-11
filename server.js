const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1); // Exit process with failure
});

// Define MongoDB schema and model
const indicatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sub_indicators: [String]
});

const IndicatorModel = mongoose.model('Indicator', indicatorSchema);

// Define API endpoint to fetch indicators
app.get('/api/indicators', async (req, res) => {
  try {
    const indicators = await IndicatorModel.find();
    res.json(indicators);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
