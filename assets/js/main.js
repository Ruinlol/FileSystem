/**
 * 
 */
var file;
var formData;
var name;
var resp;
if (!sessionStorage.usr) {
	window.location.href = 'http://localhost/ITtalents/BIG_PROJECT_KAPPA/index.html';
}
$(function() {
	//Add button
	$('#add').on('click',function(){
		$('#uploads').show();
	});
	
	//Close the upload form
	$('#close').on('click',function() {
		$('#uploads').hide();
	})
	
	//Uploading a file  with AJAX
	$('form').on('submit', function(e) {
		e.preventDefault();
		var user = sessionStorage.usr;
		file = $('#uploadField')[0].files[0];
		formData = new FormData();
		formData.append('upload', file);
		formData.append('user', user);
		$.ajax ({
			url: 'server/uploads.php',
			type: 'POST',
			dataType: 'JSON',
			data: formData,
			contentType: false,
			processData: false,
			success: function(d) {
				if (d == 'You have that already') {
					alert ('That file excists!');
				}
				
			}
		});
		
	});
});