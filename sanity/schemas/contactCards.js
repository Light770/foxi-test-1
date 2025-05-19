export default {
  "name": "contactCards",
  "title": "Contact Cards",
  "type": "object",
  "fields": [
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
              "name": "icon",
              "title": "Icon",
              "type": "image",
              "options": {
                "hotspot": true
              }
            },
            {
              "name": "link",
              "title": "Link",
              "type": "url"
            }
          ]
        }
      ]
    }
  ]
}