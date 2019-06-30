
/************* Get and display 12 random users *************/
$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    const users = data.results;
  	users.forEach((user) => {
  		displayData(user);
  	});
  }
});

// Display data.
function displayData(user) {
	const $gallery = $('#gallery');
	const $card = createAndAppendCardToGallery(user, $gallery);
	const $cardImgContainer = createAndAppendCardImgContainerToCard($card);
	const $img = createAndAppendCardImgToCardImgContainer(user, $cardImgContainer);
	const $cardInfoContainer = createAndAppendCardInfoContainerToCard($card);
	const $cardName = createAndAppendCardNameToCardInfoContainer(user, $cardInfoContainer);
	const $email = createAndAppendEmailToCardInfoContainer(user, $cardInfoContainer);
	const $city = createAndAppendCityToCardInfoContainer(user, $cardInfoContainer);

}

// Create and append Card to Gallery.
function createAndAppendCardToGallery(user, container) {
  const $card = $('<div></div>', {
    class: 'card'
  });

  $card.appendTo(container);

  /************* Create a modal window *************/
  $card.unbind().click(() => {
    const $modalContainer = createModalContainer(user);
    const $modal = createModal($modalContainer);
    const $button = createButton($modal);
    const $modalInfoContainer = createModalInfoContainer($modal);
    const $imgModal = createModalImg(user, $modalInfoContainer);
    const $modalName = createModalName(user, $modalInfoContainer);
    const $modalEmail = createModalEmail(user, $modalInfoContainer);
    const $modalCity = createModalCity(user, $modalInfoContainer);
    const $modalHr = createModalHr($modalInfoContainer);
  });

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

// Create modal container and append to body.
function createModalContainer(user) {
  const $modalContainer = $('<div></div>', {
		class: 'modal-container'
	});

	$modalContainer.appendTo($('body'));

	return $modalContainer;
}

// Create modal and append to modal container.
function createModal(container) {
  const $modal = document.createElement('div');
  $modal.className = 'modal';
  container.append($modal);
  return $modal;
}

// Create remove button.
function createButton(container) {
	const $button = $('<button><strong>X</strong></button>', {
		class: 'modal-close-btn',
    id: 'modal-close-btn',
    type: 'button'
	});

	$button.appendTo(container);

  $button.unbind().click(() => {
    $('.modal-container').remove();
  });

	return $button;
}

// Create modal info container and append to modal.
function createModalInfoContainer(container) {
  const $modalInfoContainer = document.createElement('div');
  $modalInfoContainer.className = 'modal-info-container';
  container.append($modalInfoContainer);
  return $modalInfoContainer;
}

// Create modal img and append to modal info container.
function createModalImg(user, container) {
	const $img = $('<img />', {
		class: 'modal-img',
		src: user.picture.medium,
		alt: 'profile picture'
	});
	$img.appendTo(container);
	return $img;
}

// Create modal name.
function createModalName(user, container) {
  const $modalName = $('<h3></h3>', {
    class: 'modal-name cap',
    text: user.name.first + ' ' + user.name.last
  });
  $modalName.appendTo(container);
  return $modalName;
}

// Create email for modal window.
function createModalEmail(user, container) {
  const $modalEmail = $('<p></p>', {
    class: 'modal-text',
    text: user.email
  });
  $modalEmail.appendTo(container);
  return $modalEmail;
}

// Create city for modal window.
function createModalCity(user, container) {
  const $modalCity = $('<p></p>', {
    class: 'modal-text cap',
    text: user.location.city
  });
  $modalCity.appendTo(container);
  return $modalCity;
}

// Create hr element.
function createModalHr(container) {
  const $modalHr = $('<hr>');
  $modalHr.appendTo(container);
  return $modalHr;
}
