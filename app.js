const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Use wildcard forwarding for all /kegg/... routes
app.use('/kegg', async (req, res) => {
  try {
    const keggPath = req.originalUrl.replace(/^\/kegg/, '');
    const keggUrl = `https://rest.kegg.jp${keggPath}`;
    const response = await axios.get(keggUrl);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(response.data);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

app.listen(PORT, () => console.log(`KEGG proxy running on port ${PORT}`));