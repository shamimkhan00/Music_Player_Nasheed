import { audio_const, time_update_bar, removeAudioEventListeners } from './playbar.js';
import { cardcontains } from './playlists.js';

cardcontains();

var matching;

document.querySelectorAll('.cards')
    .forEach((song) => {
        song.addEventListener('click', function () {
            var audioFile = song.getAttribute('data-audio');

            document.querySelector('.js-song').innerHTML = `
            <audio autoplay id="song">
                <source src="${audioFile}">
            </audio>
            `
            playButtonColor(song);

            removeAudioEventListeners(); // Remove existing event listeners
            audio_const();
            time_update_bar(); 

        })
    });

    // song.querySelector('.play-button').classList.toggle('green');

var currentPlayButton=null;
function playButtonColor(song){
    if (currentPlayButton) {
        currentPlayButton.classList.remove('green'); // Revert the previous play button's class
    }
    const playButton = song.querySelector('.play-button');
    playButton.classList.add('green'); // Set the new play button's class
    currentPlayButton = playButton; // Update the reference to the current play button
}
