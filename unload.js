var unload = function(options) {

  // store any options passed
  this.options = options || {};

  // save button
  this.saveButton = document.getElementById(this.options.save);

  // text area we want to save
  this.textArea = document.getElementById(this.options.content);

  // set the text area to 'unsaved' right away
  this.textArea.className = 'unsaved';

  // check the localStorage for 'content' and set it as the text area value
  // otherwise set the 'content' item in localStorage for the first time
  if (window.localStorage.getItem('content')) {
    this.textArea.value = window.localStorage.getItem('content');
  } else {
    window.localStorage.setItem('content', this.textArea.value);
  }

  // add event handlers
  this._addEventHandlers();

}


// adding event handlers
// probably doesn't need to be in prototype
unload.prototype._addEventHandlers = function() {
  var _this = this;

  // on button press, add unsaved class to text area
  this.textArea.addEventListener('keydown', _this.unsave.bind(this));

  // save text area on click
  this.saveButton.addEventListener('click', _this.save.bind(this));

  // if user tries to leave page, check for unsave class
  window.addEventListener('beforeunload', _this.unload.bind(this));
}


// save the value of the text field to local storage and update
// the class name
unload.prototype.save = function() {
  
  // set local storage
  window.localStorage.setItem('content', this.textArea.value);

  // remove 'unsaved' class
  this.textArea.className = '';

};


// add unsave class to the text area
unload.prototype.unsave = function() {

  this.textArea.className = 'unsaved';

}


// check if the text area in question has the 'unsaved' class
// if it does prevent the page from reloading and send a navigation
// warning with "Unsaved changes!"
unload.prototype.unload = function(e) {

  if (this.textArea.className == 'unsaved') {    
    (e || window.event).returnValue = 'Unsaved changes!';
    return null;
  }

}