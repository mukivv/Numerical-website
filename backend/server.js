const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

const ExampleSetSchema = new mongoose.Schema({
  methods: [String],
  data: [
    {
      xL: Number,
      xR: Number,
      error: Number,
      fx: String,
    }
  ]
});

const ExampleSet = mongoose.model('ExampleSet', ExampleSetSchema, 'examples');

app.get('/api/example/:method', async (req, res) => {
  try {
    const { method } = req.params;
    
    const sets = await ExampleSet.find({ methods: { $in: [method] } }).lean();
    
    if (sets.length === 0) {
      return res.status(404).json({ message: 'No examples found' });
    }
    
    const randomSet = sets[0];
    
    const randomData = randomSet.data[Math.floor(Math.random() * randomSet.data.length)];
    
    res.json({
      methods: randomSet.methods,
      ...randomData
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});