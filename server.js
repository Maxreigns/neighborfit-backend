const express = require('express');
const cors = require('cors');
const matchRoutes = require('./routes/match');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/match', matchRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
