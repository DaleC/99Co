$(function(){

	var districtList = $("district-list-panel ul");
	

	for(obj in districtArray){
		//districtList.append();
	}

	$('input:checkbox').change(function() {
		
		var disSelected = $("#" + this.id).val();
		var query = "https://www.99.co/-/get-district-polygons?districts=" + disSelected;

		$.ajax({
  			url: query,
  			context: document.body,
  			xhrFields: {
    withCredentials: true
  },
  			crossDomain : true,
			})
		.done(function(data) {
  				console.log(data);
  			
		});
    	//$('#' + this.id).toggle(this.checked);
	});
});