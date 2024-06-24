const response = {
    "id": "chatcmpl-9dS5ZU6KBjTjlRCynI7zjhGeYCb1u",
    "object": "chat.completion",
    "created": 1719189793,
    "model": "gpt-4o-2024-05-13",
    "choices": [
      {
        "index": 0,
        "message": {
          "role": "assistant",
          "content": "```json\n{\n  \"IMEI\": \"358184148392384\",\n  \"MODEL\": \"IPHONE 13 256GB\"\n}\n```"
        },
        "logprobs": null,
        "finish_reason": "stop"
      }
    ],
    "usage": {
      "prompt_tokens": 793,
      "completion_tokens": 31,
      "total_tokens": 824
    },
    "system_fingerprint": "fp_9cb5d38cf7"
  }

  module.exports = response;