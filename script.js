$(function() {
    var counter = 0;

    $('#btn').click(function() {

        var removeButton = $('<input type="button" class="close" value="❌"'+ (counter) + '><p>' + $('#ta').val() + '</p>'),
            containerDiv = $('<div class="message""></div>');

        removeButton.click(function(e) {
            e.preventDefault();
            containerDiv.remove();
        });

        containerDiv
            .append(removeButton);

        counter++;

        $("#wrapper").append(containerDiv);
        $('#ta').val('');
    });
});