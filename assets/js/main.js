/**
 * 
 */
var array;
var file;
var formData;
var name;
var resp;
var user = sessionStorage.usr;
if (!sessionStorage.usr) {
	window.location.href = 'http://localhost/ITtalents/BIG_PROJECT_KAPPA/index.html';
}
$(function() {
	
	function createEvnt(help) {
		return 
	}
	// Getting user data
	
	$.ajax({
		url : 'server/userstuff.php',
		dataType : 'JSON',
		method : 'POST',
		data : {
			'username' : user
		},
		success : function(d) {

			array = d;
			
			// Looping through the array with results and getting the name and
			// the paths for
			// every item

			for (var int = 0; int < d.length; int++) {
				var temp = d[int][0].split('.');
				var format = temp[temp.length - 1];

				var fileName = $('<span></span>').text(d[int][0]);
				var formatclass;

				switch (format) {
				case 'txt':
					formatclass = "fa fa-file-text-o"

					break;
			
				case 'jpg':
					formatclass = "fa fa-file-image-o";

					break;
				case 'png':
					formatclass = "fa fa-file-image-o";

					break;
				}
				var icon = $('<i></i>').addClass(formatclass);
				var listNext = $('<li></li>');
				listNext.attr('id', 'file_' + int)
				listNext.attr('format', format);
				listNext.append(icon);
				listNext.append(fileName);
				$('ol').append(listNext);
				
			
			
				
		}
			var olCount = $('#treealike li');
			var link;
			function generate_handler( j ) {
			    return function(event) { 
			    	link = d[j][1];
					link = link.substr(3);
					$('#content').css('background', '100% no-repeat url("' +link+'")');
			    };
			}
			for (var int = 0; int < olCount.length; int++) {
				
				
				
				$('#file_' + int).on('click',generate_handler(int));
			}
			
			
	}
	});
	
	// Add button
	$('#add').on('click', function() {
		$('#uploads').show();
	});
	//Logout button
	$('#logout').on('click',function() {
		sessionStorage.removeItem('usr');
		window.location.href = 'http://localhost/ITtalents/BIG_PROJECT_KAPPA/index.html';
	})
	
	// Close the upload form
	$('#close').on('click', function() {
		$('#uploads').hide();
	})

	// Uploading a file with AJAX
	$('form')
			.on(
					'submit',
					function(e) {
						e.preventDefault();
						file = $('#uploadField')[0].files[0];
						formData = new FormData();
						formData.append('upload', file);
						formData.append('user', user);
							$.ajax({
									url : 'server/uploads.php',
									type : 'POST',
									dataType : 'JSON',
									data : formData,
									contentType : false,
									processData : false,
									success : function(d) {
										if (d == 'You have that already') {
											alert('That file already excists!');
										}
										if (d == 'Done') {
											alert('File added');
											window.location.href = 'http://localhost/ITtalents/BIG_PROJECT_KAPPA/main.html';
										}

									}
								});

					});
});