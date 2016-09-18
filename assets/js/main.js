/**
 * 
 */
var test;
var file;
var formData;
var name;
var resp;
var user = sessionStorage.usr;
if (!sessionStorage.usr) {
	window.location.href = 'http://localhost/ITtalents/BIG_PROJECT_KAPPA/index.html';
}
$(function() {
	
	//Getting user data
	$.ajax ({
		url:'server/userstuff.php',
		dataType: 'JSON',
		method:'POST',
		data: {'username': user},
		success: function(d) {
			
			test = d;
			//Looping through the array with results and getting the name and the paths for 
			//every item
			
			for (var int = 0; int < d.length; int++) {
				var temp = d[int][0].split('.');
				var format = temp[temp.length - 1];
				
			
				var fileName = $('<span></span>').text(d[int][0]);
				var formatclass;
				var rand = '#file'+int;
				
				switch (format) {
				case 'txt':
					formatclass = "fa fa-file-text-o"
					
					break;
				case 'jpg':
					formatclass = "fa fa-file-image-o";
					
					break;
				}
				var icon = $('<i></i>').addClass(formatclass);
				var listNext = $('<li></li>');
				listNext.attr('id', 'file' + int)
				listNext.append(icon);
				listNext.append(fileName);
				$('ol').append(listNext);
				
				
				var linkPerItem = d[int][1];
				linkPerItem =linkPerItem.substr(3);
				console.log(linkPerItem);
				console.log(rand);
				$(rand).on('click', function () {
						$('#content').css("background", 'url("' + linkPerItem + '")');
						console.log(this);
						console.log(linkPerItem);
						
					});
				
				
							
				
			}
			
			
		}
	});
	
	
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
					alert ('That file already excists!');
				}
				if (d == 'Done') {
					alert ('File added');
					window.location.href = 'http://localhost/ITtalents/BIG_PROJECT_KAPPA/main.html';
				}
				
			}
		});
		
	});
});