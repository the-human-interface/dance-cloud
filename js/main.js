(function() {

  var navmenu = document.getElementById('navmenu');
  var navmenuToggle = document.getElementById('navmenu-toggle');
  var isOpen = false;

  function openNavmenu() {
    navmenu.classList.add('is-open');
    document.body.classList.add('navmenu-is-open');
    isOpen = true;
  }

  function closeNavmenu() {
    navmenu.classList.remove('is-open');
    document.body.classList.remove('navmenu-is-open');
    isOpen = false;
  }

  function toggleNavmenu(event) {
  }

  // navmenu.addEventListener('click', function(e) {
  //   e.stopPropagation();
  // }, false)
  navmenuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    if (isOpen)
      closeNavmenu();
    else
      openNavmenu();
  }, false);

}());

(function() {

  var container = document.querySelector('.modals');
  var activeModal = undefined;

  function getTarget(target) {
    if (typeof target === "string") {
      return container.querySelector(target);
    }
    if (target.nodeType === 1) {
      return target;
    }
  }

  function closeOnEsc(e) {
    if (e.keyCode == 27)
      closeModal();
  }

  function clickOutside(e) {
    if (e.target === container) {
      closeModal();
    }
  }

  function openModal(target, callback) {
    target = getTarget(target);

    document.body.classList.add('modal-is-open');
    target.classList.add('is-open');

    activeModal = target;

    window.addEventListener('keyup', closeOnEsc, false);
  }

  function closeModal(callback) {
    var target = activeModal;
    document.body.classList.remove('modal-is-open');
    target.classList.remove('is-open');

    activeModal = undefined;

    window.removeEventListener('keyup', closeOnEsc, false);

    if (Modal.onclose)
      Modal.onclose();

    if (callback)
      callback();
  }

  container.addEventListener('click', clickOutside, false);

  window.Modal = {
    container: container,
    active: activeModal,
    open: openModal,
    close: closeModal
  };

}());


/**
 * Configure baguetteBox
 */
(function() {

  var prevIndex;

  function getCaption(a) {
    var caption = a.querySelector('.photo-caption');
    if (caption)
      return caption.innerHTML;
    return undefined;
  }

  function onBaguetteChange(currentIndex, imagesCount, slider) {

    var image = slider.children[currentIndex];

    if (prevIndex !== undefined && prevIndex !== currentIndex) {
      var prevImage = slider.children[prevIndex];
      prevImage.classList.remove('is-focused');
    }

    image.classList.add('is-focused');
    prevIndex = currentIndex;
  }

  baguetteBox.run('.baguette-gallery', {
    captions: getCaption,
    onChange: onBaguetteChange
  });

}());

/**
 * Trucate shows and biography
 */
(function() {
  document.addEventListener('DOMContentLoaded', function() {

    var btns = document.querySelectorAll('[data-truncate]');

    Array.prototype.forEach.call(btns, function(btn) {

      var targetID = btn.getAttribute('data-truncate');
      var target = document.querySelector(targetID)

      if (target.offsetHeight < target.scrollHeight) {
        btn.removeAttribute('hidden');
      }

      btn.addEventListener('click', function() {
        target.classList.remove('is-truncated');
        this.style.display = 'none';
      });

    });

  });
}());
