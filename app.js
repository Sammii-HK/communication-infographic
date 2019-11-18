// MAIN JS
$(function() {
  console.log('JS loaded 🍇')

  fetch('./data.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // Work with JSON data here
      console.log(data)
    })
    .catch(err => {
      // Do something for an error here
      console.log(`Error: ${err}`)
    })

  // let data

  // $.ajax({
  //   beforeSend: function(xhr) {
  //     if (xhr.overrideMimeType) {
  //       xhr.overrideMimeType('application/json')
  //     }
  //   }
  // })
  //
  // function loadData() {
  //   $.getJSON('./data.json')
  //     .done(function(res) {
  //       data = res
  //       console.log(data)
  //     }).fail(function(res) {
  //       console.log(`Error: ${res}`)
  //     })
  // }
  //
  // loadData()

})
