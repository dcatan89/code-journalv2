/* global data */
/* exported data */

var $photoUrl = document.querySelector('img');
var $imageURL = document.querySelector('#url-entry');
var $submitForm = document.querySelector('#entry-form');
var $ulEntries = document.querySelector('#ul-entries');

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
    photoUrl: urlValue,
    notes: notesValue,
    entryId: data.nextEntryId
  };
  data.entries.unshift(entryValues);
  data.nextEntryId++;
  $submitForm.reset();
  $photoUrl.setAttribute('src', 'images/placeholder-image-square.jpg');
}
$submitForm.addEventListener('submit', handleSubmit);

/* Dom Tree Creation? */

function domTreeCreation(entries) {
  /* Format for HTML
          <li class="row" entry-id="" >
            <div class="column-half">
              <img src="photoUrl" alt="">
            </div>
            <div class="column-half">
              <h1>TitleValue</h1>
              <p>Notes Value</p>
            </div>
          </li > */
  var $li = document.createElement('li');
  var $divImg = document.createElement('div');
  var $img = document.createElement('img');
  var $divValues = document.createElement('div');
  var $h1 = document.createElement('h1');
  var $p = document.createElement('p');
  var $title = document.createTextNode(entries.title);
  var $notes = document.createTextNode(entries.notes);

  $li.setAttribute('class', 'row');
  $li.setAttribute('entryId', entries.entryId);
  $img.setAttribute('src', entries.photoUrl);
  $divImg.setAttribute('class', 'column-half');
  $divValues.setAttribute('class', 'column-half');

  $li.appendChild($divImg);
  $li.appendChild($divValues);
  $divImg.appendChild($img);
  $h1.appendChild($title);
  $p.appendChild($notes);
  $divValues.appendChild($h1);
  $divValues.appendChild($p);

  return $li;
}

function domContentLoadedHandle(event) {
  for (var index = 0; index < data.entries.length; index++) {
    var $entries = domTreeCreation(data.entries[index]);
    $ulEntries.appendChild($entries);
  }
  dataView(data.view);
}

window.addEventListener('DOMContentLoaded', domContentLoadedHandle);

/* Data View Swap */
var $view = document.querySelectorAll('.view');
var $noEntries = document.querySelector('.no-entry');

function dataView(string) {
  data.view = string;

  if (data.entries.length !== 0) {
    $noEntries.classList.add('hidden');
  }
  for (var i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === string) {
      $view[i].classList.remove('hidden');
    } else {
      $view[i].classList.add('hidden');
    }
  }
}
