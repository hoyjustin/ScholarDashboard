$(document).ready(function(){

    var login = function (event) {
        event.preventDefault();

        var data = 
            {
                username: $(this).find('input[name="u"]').val(), 
                password: $(this).find('input[name="p"]').val()
            };
        console.log(data)
        $.post('/', data)
            .success(function (data) {
                window.location.href = '/dashboard';
            })
            .error(function (xhr, textStatus, errorThrown) {
                $('#error').show();
                TemplateErrorDisplay(xhr, textStatus, errorThrown);
            });
    }

    // process the form
    $('#formlogin').submit(login);
});
