export default {
  "name": "featureCards",
  "title": "Feature Cards",
  "type": "object",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "cards",
      "title": "Cards",
      "type": "array",
      "of": [
        {
          "type": "object",
          "fields": [
            {
              "name": "title",
              "title": "Title",
              "type": "string"
            },
            {
              "name": "description",
              "title": "Description",
              "type": "text"
            },
            {
              "name": "image",
              "title": "Image",
              "type": "image",
              "options": {
                "hotspot": true
              }
            }
          ]
        }
      ]
    }
  ]
}