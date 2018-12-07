$(document).ready(function () {
    $("#contact_form").submit(function(e) {


        var form = $(this);

        $.ajax({
            type: "POST",
            url: "https://formsapi.jabwn.com/key/gGN8D0kTtPSOmuqbwcBh",
            data: form.serialize(), // serializes the form's elements.
            success: function(data)
            {
                ok_message("Email Sent", "Thank you for you email, I will reply as soon as possible.")
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });

});

function ok_message(title, content) {
    $.confirm({
        title: title,
        content: content,
        buttons: {
            OK: {
                btnClass: 'pop_up_confirm',
                action: function() {}
            }
        }
    });
}
