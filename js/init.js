
// @TODO CONVERT TO JQUERY

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}

// (function ($) {
//   'use strict';

//   var init = {
//     domCache: function () {
//       this.$menuToggle = $("#navigation");

//     },

//     slideNav: function () {
//       this.menuToggle.click(function () {
//         var target = $(this).data('target');
//         $('[data-id="' + target + '"]').fadeToggle();
//       });
//     },


//     init: function () {
//       init.domCache();
//       this.slideNav();
//     }
//   };

//   $(function () {
//     init.init();
//   });

// })(jQuery);
