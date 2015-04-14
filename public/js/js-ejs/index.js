$(document).ready(function(){

    var login = function (event) {
        event.preventDefault();
        var data = 
            {
                username: $(this).find('input[name="username"]').val(), 
                password: $(this).find('input[name="password"]').val()
            };
        // $.post('/', data)
        //     .success(function (data) {
                window.location.href = '/dashboard';
            // })
            // .error(function (xhr, textStatus, errorThrown) {
            //     $('#modal-error-div').show();
            //     TemplateErrorDisplay(xhr, textStatus, errorThrown);
            // });
    }

    $('#login-btn').on('click', function() {
        var formBody =
            '<form id="login-form">'+
            '<div class="form-group">'+
            '<label for="editUsername" class="control-label">Username:</label>'+
            '<input type="text" name="username" id="editUsername" class="form-control" placeholder="Username" required>'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="editPassword" class="control-label">Password:</label>'+
            '<input type="password" name="password" id="editPassword" class="form-control" placeholder="Password" required>'+
            '</div></form>';

        $('#modal-title-text').text('Login');
        $('#modal-body-div').empty().append(formBody);
        $('#modal-dismiss-text').text('Close');
        $('#modal-submit-text').text('Log In');
        $('#modal').modal('show');
        $('#modal-form').submit(login);
    });

    $('#modal-dismiss-text').on('click', function () {
        $('#modal-error-div').hide();
    })
});
