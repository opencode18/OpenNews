(function($) {
  "use strict"; // Start of use strict
   
  var url="https://api.github.com/orgs/opencode18/repos?callback"; 
  $.getJSON(url,function(data)
  {
    var stars=data[1].watchers;
    $('#star').text(stars);
  });
})(jQuery);
