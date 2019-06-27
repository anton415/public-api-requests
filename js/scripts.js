$.ajax({
  url: 'https://randomuser.me/api/?results=12&?inc=picture,name,email,location',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
