function main() {
  $('.select-color').on('click',function() {
    var selectedColor = $(this).attr('class');
    switch (selectedColor) {
      case 'select-color magenta not-selected':
        colorClass = 'magenta';
        break;
      case 'select-color yellow not-selected':
        colorClass = 'yellow';
        break;
      case 'select-color cyan not-selected':
        colorClass = 'cyan';
        break;
                         }
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
  });
  var colorClass = '';
  var intervalID = undefined;
  $('.box').on('click',function() {
    $(this).toggleClass(colorClass);
  });
  
  $('.toggle-blink').on('click', function() {
    if (!colorClass) {
      return;
    }
    $('.toggle-blink').toggleClass('opacity');
    if (intervalID!==undefined) {
      
      clearInterval(intervalID);
      intervalID = undefined;
    } else {

      intervalID = setInterval(function() {
        $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
      }, 350);
    }
  });
}
$(document).ready(main);
