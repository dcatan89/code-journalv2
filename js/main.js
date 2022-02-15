/* global data */
/* exported data */

var $photoUrl = document.querySelector('img');
var $imageURL = document.querySelector('#url-entry');
var $submitForm = document.querySelector('#entry-form');

/* Image URL Event Listener */
function handleURLInput(event) {
  $photoUrl.setAttribute('src', event.target.value);
}
$imageURL.addEventListener('input', handleURLInput);

/* Submit Event Handler */
function handleSubmit(event) {
  event.preventDefault();
  var titleValue = $submitForm.elements.title.value;
  var urlValue = $submitForm.elements.url.value;
  var notesValue = $submitForm.elements.notes.value;
  var entryValues = {
    title: titleValue,
    photoURL: urlValue,
    notes: notesValue,
    entryId: data.nextEntryId
  };
  data.entries.unshift(entryValues);
  data.nextEntryId++;
  $submitForm.reset();
  $photoUrl.setAttribute('src', 'images/placeholder-image-square.jpg');
}
$submitForm.addEventListener('submit', handleSubmit);
