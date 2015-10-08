
var announcement = $('div.announcement');

announcement.each(function () {
    var button = $('<button>X</button>');
    var currentDiv = $(this);
    currentDiv.append(button);
    
    button.on('click', function() {
        if ($(this).text() === "X") {
            currentDiv.find('p').hide('slow');
            $(this).text('Show Announcement');
        }
        else {
            currentDiv.find('p').show('slow');
            $(this).text("X");
        }
    });
});
