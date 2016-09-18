/**
 * 
 */
if (sessionStorage.usr) {
	window.location.href = 'http://localhost/ITtalents/BIG_PROJECT_KAPPA/main.html';
}
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
			url: 'server/login.php'
			
		}).then(function (d) {
			
			if (d == 'success'){
				sessionStorage.usr = $('#userNM').val();
				window.location.href = 'http://localhost/ITtalents/BIG_PROJECT_KAPPA/main.html';
			} else {
				alert('Invalid username/password combination');
			}
			});
		
	});
});