// API Example: https://cloud.ibm.com/apidocs/language-translator?code=node#translate

const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  authenticator: new IamAuthenticator({
    apikey: 'nEqUpV4HFIX7Sy-enSxWqIUriXtDJAHeK2TFt8CL4-6O',
  }),
  url: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/78e6c599-229d-42d5-98ca-5449261008fe/v3/translate?version=2018-05-01',
});

const translateParams = {
  text: 'Hello',
  modelId: 'en-fr',
};

languageTranslator.translate(translateParams)
  .then(translationResult => {
    console.log(JSON.stringify(translationResult, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

  export default {
    languageTranslator
  }
  