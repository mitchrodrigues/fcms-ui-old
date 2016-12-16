import Config from 'lib/config'; 
import _ from 'lodash';


class ModelBase {
  constructor(attributes, path) {
    this.attributes = attributes || {};

    this.className = this.constructor.name;
    this.url = Config.apiUrl + (path || this.className).toLowerCase();
    this.errorKey = '';
    this.callbacks = {};   
  }

  get(attrib) {
    return this.attributes[attrib];
  }

  set(attrib, value) {
    return (this.attributes[attrib] = value)
  }

  collection(additionalUrlPiece) {
    var url = this._makeUrl(additionalUrlPiece);
    return $.get(url);
  }

  post(data, additionalUrlPiece) {
    var url = this._makeUrl(additionalUrlPiece),
      pData = {}
    pData[this._railsName()] = data;

    return $.post(url, pData);
  }

  put(data, additionalUrlPiece) {
    var url = this._makeUrl(additionalUrlPiece),
      pData = {}

    pData[this._railsName()] = data;

    return $.post(url, pData);
  }

  delete(additionalUrlPiece) {
    var url = this._makeUrl(additionalUrlPiece);

    return $.ajax({
              url: url,
              method: 'DELETE'
            }).then(function(result) {
              this.attributes  = {};
              this._setErrorState(result.key);
              return this;
            }.bind(this));
  }

  save(additionalUrlPiece) {
    var method = this.get('id') ? 'put' : 'post';

    return this[method](this.attributes).then(function(result) {
      if (result.key)
        this._setErrorState(result.key);
      else
        this._setValidRecordAttributes(result);

      return this;
    }.bind(this));
  }

  loadForm2Attributes(formEle) {
    var values = formEle.serializeArray();
    _.forEach(values, function(obj) {
       this.set(obj.name, obj.value);
    }.bind(this));
  }

  _railsName() {
    return this.className.toLowerCase()
  }

  _makeUrl(additionalUrlPiece) {
    var url = this.url;

    if (additionalUrlPiece)
      url = url + additionalUrlPiece;

    return url;
  }


  _setErrorState(key) {
    this.validRecord = false;
    this.responseKey    = key;
  }

  _setValidRecordAttributes(attributes, responseKey) {
    this.attributes  = attributes;
    this.validRecord = true;
    this.responseKey =  responseKey;
  }
}

ModelBase.find = function(id) {
  var model = new (this),
        url = model._makeUrl('/' + id);

  console.log(url);        

  return $.get(url).then(function(result) {
     if (result)
       model._setValidRecordAttributes(result);
     return model;
  });
}


ModelBase.collection = function(additionalUrlPiece) {
  var model = new (this),
       url  = model._makeUrl(additionalUrlPiece);

  return $.get(url).then(function(results) {
    if (!results)  return [];
    return results.map(function(result) { 
      return new this(result)
    }.bind(this));
  }.bind(this));
}

ModelBase.search = function(search, additionalUrlPiece) {
  var model = new (this),
       url  = model._makeUrl((additionalUrlPiece || '') + '/search');

  return $.post(url, search).then(function(results) {
    if (!results)  return [];
    return results.map(function(result) { 
      return new this(result)
    }.bind(this));
  }.bind(this));
}

export default ModelBase;