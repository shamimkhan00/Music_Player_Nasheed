const playlist = [{
    image: 'pic/playlist/Sewarim.jpg',
    name: 'Sewarim',
    audio: 'audio/Sewarim.mp3'
}, {
    image: 'pic/playlist/way_tears.jpg',
    name: 'Way of Tears',
    audio: 'audio/way_tears.mp3'
}, {
    image: 'pic/playlist/TheBeautyofExistence.jpg',
    name: 'BeautyofExistence',
    audio: 'audio/TheBeautyofExistence.mp3'
}, {
    image: 'pic/playlist/MyHope.jpg',
    name: 'My Hope',
    audio: 'audio/MyHope.mp3'
}];



let cardcontainsHTML = '';

export function cardcontains() {
    

    playlist.forEach((song) => {
        cardcontainsHTML = cardcontainsHTML + `
        <div class="cards" data-audio="${song.audio}">
            <div class="play-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"
                    fill="none">
                    <circle cx="12" cy="12" r="11" fill="none" /> 
                    <path d="M8 7l10 5-10 5z" fill="#000" /> 
                </svg>
            </div>
                <img src=${song.image} alt="">
                <h3>${song.name}</h3>
        </div>
        `
    })

    document.querySelector('.cardContain-js').innerHTML=cardcontainsHTML;
    // return cardcontainsHTML;
}


// console.log(cardcontainsHTML);


