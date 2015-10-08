
$("img").click(function() {
    var overlay = $('<div class="overlay"> </div>');
    var altText = $(this).attr('alt');
    var image = $(this).attr('src');
    // console.log(altText);
    $('body').append(overlay);
    overlay.append("<img src='" + image + "'>");
    overlay.append(altText);
    
    $("img").click(function() {
        overlay.hide('slow');
    });    
});
