function render(data) {
  let html = `<div class ="comentBox"><div class="leftPaneImg"><img src ="https://placeholdit.imgix.net/~text?w=100&h=100"/></div><div class="rightPanel"><span>${data.name}</span><p>${data.body}<p></div><div class = 'clear'></div></div> `;
  $('#container').append(html);
}

$(document).ready(function () {
  let coment = [
    {
      name: 'Andriy Aarchyck',

      body: 'This is a coment 1',
    },
  ];
  for (let i = 0; i < coment.length; i++) {
    render(coment[i]);
  }

  $('#addComent').click(function () {
    let addObj = {
      name: $('#name').val(),

      body: $('#bodyText').val(),
    };

    console.log(addObj);
    coment.push(addObj);
    render(addObj);
  });
});
