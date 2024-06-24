const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); // Library for making HTTP requests
const requestOpenAI = require('./openai_request');
const extractResponseItems = require('./work_with_response');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '20mb' }));

// Function to fetch image from URL and convert to base64
async function convertURLToBase64(imageUrl) {
  try {
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer' // Ensure response is treated as binary data
    });

    const base64Image = Buffer.from(response.data, 'binary').toString('base64');
    return base64Image;
  } catch (error) {
    console.error('Error fetching image and converting to base64:', error);
    throw error;
  }
}

app.post('/process-image', async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ message: 'No image URL provided' });
    }

    // Fetch image from URL and convert to base64
    const base64Image = await convertURLToBase64(imageUrl);

    if (!base64Image) {
      return res.status(500).json({ message: 'Failed to fetch and convert image to base64' });
    }

    console.log('Received image. Processing...');

    // Now you can proceed with your OpenAI or other processing using base64Image

    // Example: Call OpenAI API with base64Image
    const openAIResponse = await requestOpenAI(base64Image);
    console.log('Received response from OpenAI. Extracting data...');
    const extractedData = extractResponseItems(openAIResponse);

    // Example response
    res.json({ extractedData }); // Return base64 image or other data as needed
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
