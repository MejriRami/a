const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS middleware
app.use(cors());
app.use(express.json());

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

// Define MongoDB schema and model for indicators
const indicatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sub_indicators: [String]
});

const IndicatorModel = mongoose.model('Indicator', indicatorSchema);

// Define MongoDB schema and model for markets
const marketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  companies: [String]
});

const MarketModel = mongoose.model('Market', marketSchema);

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

// Define API endpoint to fetch markets
app.get('/api/markets', async (req, res) => {
  try {
    const markets = await MarketModel.find();
    res.json(markets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Define API endpoint to fetch sub-indicators by indicator ID
app.get('/api/subindicators/:indicatorId', async (req, res) => {
  try {
    const indicatorId = req.params.indicatorId;
    const indicator = await IndicatorModel.findById(indicatorId);
    const subIndicators = indicator.sub_indicators;
    res.json(subIndicators);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
