$.ajax({
  url: 'https://randomuser.me/api/?results=12&?inc=picture,name,email,location',
  dataType: 'json',
  success: function(data) {
  	data.results.forEach((user) => {
  		displayData(user);
  	});
  }
});

// Display data.
function displayData(user) {
	const $gallery = $('#gallery');
	const $card = createAndAppendCardToGallery($gallery);
	const $cardImgContainer = createAndAppendCardImgContainerToCard($card);
	const $img = createAndAppendCardImgToCardImgContainer(user, $cardImgContainer);
	const $cardInfoContainer = createAndAppendCardInfoContainerToCard($card);
	const $cardName = createAndAppendCardNameToCardInfoContainer(user, $cardInfoContainer);
	const $email = createAndAppendEmailToCardInfoContainer(user, $cardInfoContainer);
	const $city = createAndAppendCityToCardInfoContainer(user, $cardInfoContainer);
}

// Create and append Card to Gallery.
function createAndAppendCardToGallery(container) {
	const $card = document.createElement('div');
	$card.className = 'card';
	container.append($card);
	return $card;
}

// Create and append Card img container to Card.
function createAndAppendCardImgContainerToCard(container) {
	const $cardImgContainer = document.createElement('div');
	$cardImgContainer.className = 'card-img-container';
	container.append($cardImgContainer);
	return $cardImgContainer;
}

// Create and append Card img to Card img container.
function createAndAppendCardImgToCardImgContainer(user, container) {
	const $img = $('<img />', {
		class: 'card-img',
		src: user.picture.medium,
		alt: 'profile picture'
	});
	$img.appendTo(container);
	return $img;
}

// Create and append Card info container to Card.
function createAndAppendCardInfoContainerToCard(container) {
	const $cardInfoContainer = document.createElement('div');
	$cardInfoContainer.className = 'card-info-container';
	container.append($cardInfoContainer);
	return $cardInfoContainer;
}

// Create and append Card name to Card info container.	
function createAndAppendCardNameToCardInfoContainer(user, container) {
	const $cardName = $('<h3></h3>', {
		class: 'card-name cap',
		text: user.name.first + ' ' + user.name.last
	});
	$cardName.appendTo(container);
	return $cardName;
}

// Create and append Email to Card info container.	
function createAndAppendEmailToCardInfoContainer(user, container) {
	const $email = $('<p>', {
		class: 'card-text',
		text: user.email
	});
	$email.appendTo(container);
	return $email;
}

// Create and append City to Card info container.	
function createAndAppendCityToCardInfoContainer(user, container) {
	const $city = $('<p>', {
		class: 'card-text cap',
		text: user.location.city
	});
	$city.appendTo(container);
	return $city;
}


