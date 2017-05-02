module.exports = {
  VCAP_SERVICES: JSON.stringify({
   natural_language_classifier: [{
     credentials: {
       url: 'https://gateway.watsonplatform.net/natural-language-classifier/api',
        "username": "4be8da9e-065f-4b5d-8343-465e58f8447e",
        "password": "1j5zzN1BO3Zd"
     }
   }],
   tone_analyzer: [{
     credentials: {
       url: 'https://gateway.watsonplatform.net/tone-analyzer/api',
	  "username": "21bb39e8-96e6-4c18-a722-b930978ad776",
	  "password": "HgHqa4gKkgCG"
     }
   }],
   personality_insights: [{
     credentials: {
       url: 'https://gateway.watsonplatform.net/personality-insights/api',
		"username": "c9609668-63fa-4794-b436-5d9059fd0bb8",
		 "password": "OgrTCoFFunvT"
     }
   }]
  }),
  TWITTER: JSON.stringify([{
    consumer_key: 'cIhFaDldpemDgEh0yvZdUqead',
    consumer_secret: 'TOxuhpr5eJApSLESJzy7sq2Ovj1jIHO7Ug3YWA26H0kyNPsTfz',
    access_token_key: '852549147651702785-3PpQjln2cs72JP3CMbQMkzIcY1AlzFA',
    access_token_secret: 'tWDTElqz2gYQVPVBEZf73YHEcIGwZHeiRIKS8VMv0m4Ow'
  }]),
  TWITTER_TOPIC: '@ludex_ai',
  CLASSIFIER_ID: ' CLASSIFIER ID',
  ALCHEMY_API_KEY: 'ALCHEMY KEY',
  DEBUG: 'scc:*'
};