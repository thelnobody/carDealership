$(document).ready(function () {
	$.ajax({
		type: "GET",
		url: "car.xml",
		dataType: "xml",
		success: function(response) {
			$(response).find('car').each(function(){
				let brand = $(this).find("brand").text();
				let model = $(this).find("model").text();
				let price = $(this).find("price").text();
				let description = $(this).find("desc").text();
				let img = $(this).find("image").attr("file");
				let card = `
				<div class="card">
					<div class="cardTitle" style="background: url('${img}') center;">
						<h2 class="cardh2">${brand} - ${model}</h2>
						<h2 class="price">${price} DDK</h2>
					</div>
					<div class="cardDesc">
						<p>${description}</p>
					</div>
					<div class="cardReadMore">
						<button class="btn">Se mere</button>
					</div>
				</div>
				`;
				$(card).appendTo("#wrapper");
			});
		}
	});
});
