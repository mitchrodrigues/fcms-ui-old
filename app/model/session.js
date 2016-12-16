import ModelBase from './base.js';

class Session extends ModelBase {
  constructor(attributes) {
    super(attributes);
  }

  isLoggedIn() {
    return this.validRecord;
  }

  loadOnce(callback) {
    if (this.initing) return false;
    if (this.inited)  return true;


    this.load().then(function(record) {
      this.initing = false;
      callback(record);
    }.bind(this));

    return true;
  }

  load() {
    return $.get(this.url)    
      .then(function(result) {
          this.inited      = true;
          this.validRecord = result.success;
          if (!this.validRecord)
            this._setErrorState(result.key)
          else 
            this._setValidRecordAttributes(result.user, result.key);
        return this;
      }.bind(this));
    }


  login(email, password) {
    return $.post(this._makeUrl(), {
              email: email,
              password: password
            }).then(function(result) { 
                this.validRecord = result.success;
                if (!this.validRecord)
                  this._setErrorState(result.key);
                else
                  this._setValidRecordAttributes(result.user, result.key);               
                return this;

            }.bind(this));

  }
}

const CurrentSession = new Session({});

export default CurrentSession;
