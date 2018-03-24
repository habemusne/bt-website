$('#btn-form-contact').click(function(event) {
  event.preventDefault()
  const name = $('#custom__send_contact_name').text
  const email = $('#custom__send_contact_email').text
  const message = $('#custom__send_contact_message').text
  console.log(name)
  console.log(email)
  console.log(message)
})
function custom__send_contact(data) {
  console.log(data)
  // $.post({
  //   url: 'send_contact',
  //   data,
  //   success: function(response) {
  //     console.log(response)
  //   },
  // })
}