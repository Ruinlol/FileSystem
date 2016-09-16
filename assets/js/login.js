/**
 * 
 */

$(function () {
	$('form').on('submit', function (e) {
		e.preventDefault();
		var data = {
				'username': $('#userNM').val(),
				'password': $('#passWD').val(),
		};
		var request = $.ajax({
			method: 'POST',
			dataType: 'JSON',
			data: data,
			url: 'server/login.php',
			complete: function () {
				/*window.location.href = 'http://localhost/ITtalents/BIG_PROJECT_KAPPA/index.html';*/
				alert('Login sent');
			}
		});
		
	});
});