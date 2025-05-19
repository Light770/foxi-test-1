export default {
  "name": "pricingColumns",
  "title": "Pricing Columns",
  "type": "object",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string"
    },
    {
      "name": "columns",
      "title": "Columns",
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
              "name": "price",
              "title": "Price",
              "type": "number"
            },
            {
              "name": "features",
              "title": "Features",
              "type": "array",
              "of": [
                {
                  "type": "string"
                }
              ]
            },
            {
              "name": "buttonText",
              "title": "Button Text",
              "type": "string"
            },
            {
              "name": "buttonLink",
              "title": "Button Link",
              "type": "url"
            }
          ]
        }
      ]
    }
  ]
}