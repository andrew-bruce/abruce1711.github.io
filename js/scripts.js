$(document).ready(function () {
    
    var num1 = Math.floor(Math.random() * 10)+1;
    var num2 = Math.floor(Math.random() * 10)+1;

    document.getElementById("validationQuestion").innerHTML = num1 + " + " + num2 + " (anti-spam)"

    $("#contact_form").submit(function(e) {
        var form = $(this);
        var validationAnswer = document.getElementById("validationAnswer").value;

        if (num1 + num2 == validationAnswer)
        {
            $.ajax({
                type: "POST",
                url: "https://formsapi.jabwn.com/key/gGN8D0kTtPSOmuqbwcBh",
                data: form.serialize(), // serializes the form's elements.
                success: function(data)
                {
                    ok_message("Email Sent", "Thank you for your email, I will reply as soon as possible.")
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";
                    document.getElementById("validationAnswer").value = "";
                }
            });
        }
        else 
        {
            ok_message("Erorr - Email not sent", "You answered the anti-spam question incorrectly. Please try again, unless you are a robot :-)")
        }

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
