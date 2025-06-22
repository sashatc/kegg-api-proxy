const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/kegg/*', async (req, res) => {
  try {
    const keggUrl = `https://rest.kegg.jp${req.originalUrl.replace('/kegg', '')}`;
    const response = await axios.get(keggUrl);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(response.data);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));