/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// var previousDataJSON = localStorage.getItem('data-local-storage');
// if (previousDataJSON !== null) {
//   data = JSON.parse(previousDataJSON);
// }

// function beforeUnloadListener(event) {
//   var $data = JSON.stringify(data);
//   localStorage.setItem('data-local-storage', $data);
// }

// window.addEventListener('beforeunload', beforeUnloadListener);
