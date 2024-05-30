var playPauseButton = document.getElementById('playPauseButton');
var audio;
var playIcon;
var pauseIcon;
var progressInput;
var progress;
var seekTime;

export function audio_const() {
    audio = document.getElementById('song');
    playIcon = document.getElementById('playIcon');
    pauseIcon = document.getElementById('pauseIcon');
    progressInput = document.getElementById('progress');
    progressInput.value = 0; // Reset progress input to 0 when a new song is selected
}

export function removeAudioEventListeners() {
    if (audio) {
        audio.removeEventListener('timeupdate', updateProgress);
        audio.removeEventListener('play', showPauseIcon);
        audio.removeEventListener('pause', showPlayIcon);
        progressInput.removeEventListener('input', seekAudio);
    }
}

function updateProgress() {
    progress = (audio.currentTime / audio.duration) * 100;
    progressInput.value = progress;
}

function showPauseIcon() {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline-block';
}

function showPlayIcon() {
    playIcon.style.display = 'inline-block';
    pauseIcon.style.display = 'none';
}

function seekAudio() {
    seekTime = (progressInput.value / 100) * audio.duration;
    audio.currentTime = seekTime;
}

playPauseButton.addEventListener('click', function () {
    if (playIcon.style.display !== 'none') {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline-block';
        audio.play();
    } else {
        playIcon.style.display = 'inline-block';
        pauseIcon.style.display = 'none';
        audio.pause();
    }
});

export function time_update_bar() {
    audio.addEventListener('timeupdate', updateProgress);
    progressInput.addEventListener('input', seekAudio);
    audio.addEventListener('play', showPauseIcon);
    audio.addEventListener('pause', showPlayIcon);
}
