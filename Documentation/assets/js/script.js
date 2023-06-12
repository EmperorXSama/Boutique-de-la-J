(function ($) {
  "use strict";
  /**
   * Stickey Header
   */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $(".sticky__header").removeClass("sticky");
    } else {
      $(".sticky__header").addClass("sticky");
    }
  });

  $(".mobile__menu--open").initMM({
    enable_breakpoint: true,
    mobile_button: true,
    breakpoint: 767,
    menu_class: "navbar_mobile_menu",
  });

  /**
   * Nav menu
   */
  var $mobailcanvasNav = $(".doc__nav--activation"),
    $mobailcanvasNavSubMenu = $mobailcanvasNav.find(".sub-menu");
  $mobailcanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i class="icofont-plus"></i></span>');
  $mobailcanvasNavSubMenu.slideUp();
  $mobailcanvasNav.on("click", "li a i, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(doc__nav--menu__items|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.siblings("ul").slideUp("slow");
      } else {
        $this.closest("li").siblings("li").find("ul:visible").slideUp("slow");
        $this.siblings("ul").slideDown("slow");
      }
    }
    if (
      $this.is("a") ||
      $this.is("span") ||
      $this.attr("clas").match(/\b(menu-expand)\b/)
    ) {
      $this.parent().toggleClass("menu-open");
    } else if (
      $this.is("li") &&
      $this.attr("class").match(/\b('doc__nav--menu__items')\b/)
    ) {
      $this.toggleClass("menu-open");
    }

    $(".doc__nav--activation a").click(function () {
      var target = $(this.hash);
      $("html,body")
        .stop()
        .animate({
          scrollTop: target.offset().top - 120,
        });
    });
    if (location.hash) {
      var id = $(location.hash);
    }
    $(window).on("load", function () {
      if (location.hash) {
        $("html,body").animate({ scrollTop: id.offset().top - 120 }, "linear");
      }
    });
  });

  // lightbox Activation
  const customLightboxHTML = `<div id="glightbox-body" class="glightbox-container">
  <div class="gloader visible"></div>
  <div class="goverlay"></div>
  <div class="gcontainer">
  <div id="glightbox-slider" class="gslider"></div>
  <button class="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>
  <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>
  <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>
  </div>
  </div>`;
  const lightbox = GLightbox({
    touchNavigation: true,
    lightboxHTML: customLightboxHTML,
    loop: true,
  });

  // Scroll up activation
  const scrollTop = document.getElementById("scroll__top");
  scrollTop.addEventListener("click", function () {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTop.classList.add("active");
    } else {
      scrollTop.classList.remove("active");
    }
  });
})(jQuery);

function darkMode() {
  const colorMode = document.getElementById("togBtn");

  if (colorMode.checked == true) {
    document.body.classList.add("template__dark--color");
  } else {
    document.body.classList.remove("template__dark--color");
  }
}
