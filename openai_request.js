// openai_requester.js
const OpenAI = require('openai');
require('dotenv').config();

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error("Please set your OpenAI API key in the .env file");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: API_KEY,
});

async function requestOpenAI(base64Image) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-2024-05-13",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Extract IMEI (located below barcode) and MODEL from this phone form image. Return in json format {'IMEI': _, 'MODEL': _}."
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`
              }
            }
          ]
        }
      ],
    });
    return response;
  } catch (error) {
    console.error('Error communicating with OpenAI API:', error);
    throw error;
  }
}

module.exports = requestOpenAI;