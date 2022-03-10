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
  var $li = document.querySelectorAll('li');

  if (data.editing === null) {
    var entryValues = {
      title: titleValue,
      photoUrl: urlValue,
      notes: notesValue,
      entryId: data.nextEntryId
    };
    data.entries.unshift(entryValues);
    data.nextEntryId++;
    $ulEntries.prepend(domTreeCreation(entryValues));
    $photoUrl.setAttribute('src', 'images/placeholder-image-square.jpg');
<<<<<<< HEAD
  } else {

    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing) {
        entryValues = {
          title: titleValue,
          photoUrl: urlValue,
          notes: notesValue,
          entryId: data.entries[i].entryId
        };

        data.entries.splice(i, 1, entryValues);
        var editEntry = domTreeCreation(entryValues);
        $li[i].replaceWith(editEntry);
        data.editing = null;
      }
    }
  }
=======
  }

  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].entryId === data.editing) {
      entryValues = {
        title: titleValue,
        photoUrl: urlValue,
        notes: notesValue,
        entryId: data.entries[i].entryId
      };

      data.entries.splice(i, 1, entryValues);
      var editEntry = domTreeCreation(entryValues);
      $li[i].replaceWith(editEntry);
      data.editing = null;
    }
  }

>>>>>>> master
  $submitForm.reset();
  dataView('entries');
}
$submitForm.addEventListener('submit', handleSubmit);

/* Dom Tree Creation */

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
  var $h1PencilDiv = document.createElement('div');
  var $pencilBox = document.createElement('div');
  var $pencil = document.createElement('img');

  $pencil.className = 'pencil-img edit-icon ';
  $pencil.setAttribute('data-view', 'entry-form');
  $pencilBox.setAttribute('data-view', 'entry-form');
  $pencil.setAttribute('src', 'images/pencil.png');
  $pencil.setAttribute('entryId', entries.entryId);
  $pencilBox.setAttribute('entryId', entries.entryId);
  $li.className = 'row';
  $li.setAttribute('entryId', entries.entryId);
  $img.setAttribute('src', entries.photoUrl);
  $divImg.className = 'column-half no-padding';
  $h1.className = 'h1-entries';
  $pencilBox.className = 'pencil-box edit-icon';
  $h1PencilDiv.className = 'column-full no-padding row ';
  $divValues.setAttribute('class', 'column-half');

  $li.appendChild($divImg);
  $li.appendChild($divValues);
  $divImg.appendChild($img);
  $h1.textContent = entries.title;
  $p.textContent = entries.notes;
  $h1PencilDiv.appendChild($h1);
  $h1PencilDiv.appendChild($pencilBox);
  $pencilBox.appendChild($pencil);
  $divValues.appendChild($h1PencilDiv);
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
var $anchorEntries = document.querySelector('.entries-anchor');
var $newButton = document.querySelector('.new-button');

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

var editEntryH1 = document.querySelector('.new-entry-h1');
function handleViewSwap(event) {
  var viewName = event.target.getAttribute('data-view');
  if (viewName === 'entry-form') {
<<<<<<< HEAD
    $openModal.classList.add('hidden');
    editEntryH1.textContent = 'New Entry';
    $photoUrl.setAttribute('src', 'images/placeholder-image-square.jpg');
=======
    editEntryH1.textContent = 'New Entry';
>>>>>>> master
  }
  dataView(viewName);
}
function viewSwapNoReload(event) {
  var viewName = event.target.getAttribute('data-view');
  $openModal.classList.add('hidden');
  dataView(viewName);
}

$anchorEntries.addEventListener('click', viewSwapNoReload);
$newButton.addEventListener('click', handleViewSwap);

/* Editing Function */
<<<<<<< HEAD
var $openModal = document.querySelector('.delete');
=======
>>>>>>> master
function handleEditing(event) {
  var viewName = event.target.getAttribute('data-view');
  var editEntryH1 = document.querySelector('.new-entry-h1');
  if (event.target.matches('.edit-icon')) {
<<<<<<< HEAD
    $openModal.classList.remove('hidden');
=======
>>>>>>> master
    dataView(viewName);
    editEntryH1.textContent = 'Edit Entry';
    data.editing = parseInt(event.target.getAttribute('entryId'));
    for (var i = 0; i < data.entries.length; i++) {
      if (data.editing === data.entries[i].entryId) {
        $submitForm.elements.title.value = data.entries[i].title;
        $submitForm.elements.url.value = data.entries[i].photoUrl;
        $submitForm.elements.notes.value = data.entries[i].notes;
        $photoUrl.setAttribute('src', data.entries[i].photoUrl);
      }
    }
  }
}

$ulEntries.addEventListener('click', handleEditing);
<<<<<<< HEAD

/* Open/Close Modal */
var $modal = document.querySelector('.overlay');
var $cancel = document.querySelector('.cancel');
var modal = 'closed';

function toggleModal(event) {
  if (modal === 'closed') {
    $modal.classList.remove('hidden');
    modal = 'open';
  } else {
    $modal.classList.add('hidden');
    modal = 'closed';
  }
}

$openModal.addEventListener('click', toggleModal);
$cancel.addEventListener('click', toggleModal);

/* Delete Entries */
var $confirm = document.querySelector('.confirm');

function handleDelete(event) {
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].entryId === data.editing) {
      var $li = document.querySelectorAll('li');
      data.entries.splice(i, 1);
      $li[i].remove();
      data.editing = null;
      data.nextEntryId--;
      dataView('entries');
      $modal.classList.add('hidden');
      modal = 'closed';
    }
  }
}

$confirm.addEventListener('click', handleDelete);
=======
>>>>>>> master
