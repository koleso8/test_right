const phoneInputField = document.querySelector('#phone');
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: 'gb',
  geoIpLookup: function (callback) {
    fetch('https://ipinfo.io/json', { headers: { Accept: 'application/json' } })
      .then(response => response.json())
      .then(data => callback(data.country))
      .catch(() => callback('us'));
  },
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
});

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = 'thankyou.html';
  });
