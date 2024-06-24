// extract_response_items.js
module.exports = function extractResponseItems(response) {
    try {
      const messageContent = response.choices[0].message.content;
      const jsonString = messageContent.match(/```json\n(.*)\n```/s)[1];
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Error extracting response items:', error);
      return null;
    }
  };