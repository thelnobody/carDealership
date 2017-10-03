$(document).ready(function () {
	$.ajax({
		type: "GET",
		url: "car.xml",
		dataType: "xml",
		success: function(response) {
			$(response).find('cars').each(function(){
				let brand = $(this).find("brand").text();
				let price = $(this).find("price").text();
				let description = $(this).find("desc").text();
				let img = $(this).find("image").attr("file");
				let card = `
				<div class="card" >
					<div class="cardTitle" style="background: url("img/${img}")">
						<h2 class="cardh2">${brand}</h2>
						<h2 class="price">${price} DDK</h2>
					</div>
					<div class="cardDesc">
					<p>${description}</p>
					<div class="cardReadMore">
						<button class="">Se mere</button>
					</div>
				</div>
				`;
				console.log(img);
				$(card).appendTo("#wrapper");
			});
		}
	});
});
