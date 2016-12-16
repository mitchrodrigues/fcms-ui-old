import Config from 'lib/config'

// HAve no internet so psuedo for i18n for now
const _i18n = {
  localesBaseUrl:      'locales/',
  defaultLanguage: 'en',
  currentLanguage: 'en',
  translations: {},  

  // TODO: Replace and and just prime this stuff
  t: function(key) {
    var allTrans = this.translations[this.currentLanguage],
        allTrans = allTrans || {};

    var trans = allTrans[key]
    if (!trans)
      trans = (this.translations[this.defaultLanguage] || {})[key]

    console.log(allTrans);

    return (trans ? trans : key);
  },

  setLanguage: function(language) {  
    this.currentLanguage = language;
    // First load the default language if its not there
    if (!this.translations[this.defaultLanguage])
      this._getLanguageFromServer(this.defaultLanguage);

    this._getLanguageFromServer(this.currentLanguage);
  },

  _getLanguageFromServer: function(lang) {
    $.get(this.url(lang)).then(function(result) {
      this.translations[lang] = result
      return result;
    }.bind(this));
  },

  url: function(lang) {
    return (
      Config.url + 
      this.localesBaseUrl + 
      lang + '.json'
    );
  }
}



export default _i18n;