export default {
  "name": "page",
  "title": "Page",
  "type": "document",
  "fields": [
    {
      "name": "title",
      "title": "Title",
      "type": "string",
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "slug",
      "title": "Slug",
      "type": "slug",
      "options": {
        "source": "title",
        "maxLength": 96
      },
      "validation": "Rule => Rule.required()"
    },
    {
      "name": "seo",
      "title": "SEO",
      "type": "seo"
    },
    {
      "name": "content",
      "title": "Content",
      "type": "array",
      "of": [
        {
          "type": "textImage"
        },
        {
          "type": "basicForm"
        },
        {
          "type": "contactCards"
        },
        {
          "type": "basicDarkCTA"
        },
        {
          "type": "basicLightCTA"
        },
        {
          "type": "basicFAQ"
        },
        {
          "type": "faqSticky"
        },
        {
          "type": "featureCards"
        },
        {
          "type": "featureList"
        },
        {
          "type": "featureSticky"
        },
        {
          "type": "basicFeed"
        },
        {
          "type": "homeCTA"
        },
        {
          "type": "highlightRows"
        },
        {
          "type": "signUp"
        },
        {
          "type": "pricingColumns"
        },
        {
          "type": "basicSocialProof"
        },
        {
          "type": "basicDarkTestimonials"
        },
        {
          "type": "pricingTable"
        }
      ]
    }
  ]
}