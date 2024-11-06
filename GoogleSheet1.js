const scriptURL = 'https://script.google.com/macros/s/AKfycbznWIzkVaQjCIhUdIGgcy8X3FXIX9MVpEYxGma2XyHRK-SaIHj_hwbUPCAzDIJcHBVOKg/exec'

const form = document.forms['bform']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your selection is saved successfully. Please fill in your personal details." ))
  .then(() => { window.location.origin(); })
  .catch(error => console.error('Error!', error.message))
})