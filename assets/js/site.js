document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM loaded');


  // Grab the gallery
  var main_gallery = document.querySelector('#main-img');
  var main_gallery_parent = document.querySelector('#main-img-parent');
  var gallery = document.querySelector('.gallery');

  main_gallery.classList.remove('invisible');
  main_gallery_parent.classList.remove('invisible');
  main_gallery.classList.add('gallery-main');
  gallery.className = 'js-gallery';

  gallery.addEventListener('click', function(event){

    //console.log('clicked');
    //console.log(event.target.src);


    if(event.target.tagName=='IMG' && event.target.parentNode.id!='gallery-parent' && event.target.tagName!='gallery'){
      // Get list of items
      var list_items = document.querySelectorAll('.js-gallery li');
      // loop to remove classes
      for (var i = 0; i < list_items.length; i++) {
        list_items[i].className = "";
      }
      main_gallery.src=event.target.src;
      //console.log(event.target.parentNode.tagName);
      event.target.parentNode.className='gallery-selected';
  }
  });

});
