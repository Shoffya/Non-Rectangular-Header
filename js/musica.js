let musicas = [
    {
        titulo: 'Energetic Hip Hop',
        artista: 'Ana Maria',
        src: './musics/energetic-hip-hop.mp3',
        img: './img/energetic-hip-hop.png'
    },
    {
        titulo: 'Journey',
        artista: 'Geovane & Bruno',
        src: './musics/geovane-bruno-journey.mp3',
        img: './img/geovane-bruno-journey.png'
    },
    {
        titulo: 'Nice Energy',
        artista: 'Geovane & Bruno',
        src: './musics/geovane-bruno-nice-energy.mp3',
        img: './img/geovane-bruno-nice-energy.png'
    },
    {
        titulo: 'Happy Travel Pop',
        artista: 'Jhonny',
        src: './musics/happy-travel-pop.mp3',
        img: './img/happy-travel-pop.png'
    },
    {
        titulo: 'Modern Fashion',
        artista: 'Michael Maysh & Thonny',
        src: './musics/modern-fashion-promo-rock.mp3',
        img: './img/modern-fashion-promo-rock.png'
    },
    {
        titulo: 'Modern Summer',
        artista: 'Michael Maysh',
        src: './musics/modern-summer.mp3',
        img: './img/modern-summer.png'
    },
    {
        titulo: 'Rock It',
        artista: 'Pablo Tuti',
        src: './musics/rock-it.mp3',
        img: './img/rock-it.png'
    },
    {
        titulo: 'Space Age',
        artista: 'Agelly',
        src: './musics/space-age.mp3',
        img: './img/space-age.png'
    },
    {
        titulo: 'Stylish Intro',
        artista: 'Tomas Limon',
        src: './musics/stylish-intro-logo-youtube.mp3',
        img: './img/stylish-intro-logo-youtube.png'
    },
    {
        titulo: 'The Future Bass',
        artista: 'Keylla',
        src: './musics/the-future-bass.mp3',
        img: './img/the-future-bass.png'
    },
    {
        titulo: 'Town',
        artista: 'Eduardo Limon',
        src: './musics/town.mp3',
        img: './img/town.png'
    }
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

document.querySelector('.btn-play').addEventListener('click', playMusica);

document.querySelector('.btn-pause').addEventListener('click', pauseMusica);



musica.addEventListener('timeupdate', () => {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';

    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinudos(Math.floor(musica.currentTime));
});

document.querySelector('.anterior').addEventListener('click', () => {

    indexMusica--;

    if (indexMusica < 0) {
        indexMusica = 11;
        indexMusica--;
    }

    renderizarMusica(indexMusica);

    playMusica();
});

document.querySelector('.posterior').addEventListener('click', () => {

    indexMusica++;

    if (indexMusica > 10) {
        indexMusica++;
        indexMusica = 0;
    }

    renderizarMusica(indexMusica);

    playMusica();
});

function playMusica() {
    musica.play();

    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';

    imagem.classList.remove('rotateImgPause');
    imagem.classList.add('rotateImg');
}

function pauseMusica() {
    musica.pause();

    document.querySelector('.btn-play').style.display = 'block';
    document.querySelector('.btn-pause').style.display = 'none';

    imagem.classList.remove('rotateImg');
    imagem.classList.add('rotateImgPause');
}

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);

    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;

        duracaoMusica.textContent = segundosParaMinudos(Math.floor(musica.duration));
    });
}

function segundosParaMinudos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;

}