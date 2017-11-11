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

}())
