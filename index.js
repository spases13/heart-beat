$('.play').click(_ => {
    let audio = new Audio("https://media1.vocaroo.com/mp3/1anN3wHKJEEG");
    audio.play();
    $('.stop').click(_ => {
        audio.pause();
    });
});


