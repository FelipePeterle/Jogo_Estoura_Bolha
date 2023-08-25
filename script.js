function addBola() {
    let x = Math.floor(Math.random() * 800);
    let y = Math.floor(Math.random() * 500);
    let cor = Math.floor(Math.random() * 4);

    let bola = $('<div class="bola"></div>');
    bola.css('left', x + 'px');
    bola.css('top', y + 'px');

    switch (cor) {
        case 0:
            bola.css('background-color', 'blue');
            break;
        case 1:
            bola.css('background-color', 'red');
            break;
        case 2:
            bola.css('background-color', 'green');
            break;
        case 3:
            bola.css('background-color', 'yellow');
            break;
    }

    bola.bind('click', function () {
        $(this).fadeOut('fast');

        placar++;
        updatePlacar();
    });

    $(document.body).append(bola);
}

function updatePlacar() {
    $('#placar').html(placar);
}

let placar = 0;

$(function () {
    $('#comecar').bind('click', function () {
        setInterval(addBola, 500);
    });
});
