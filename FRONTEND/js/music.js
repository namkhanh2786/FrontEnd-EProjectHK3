function showOptionsMenu() {
    const optionsMenu = document.getElementById("options-menu");
    optionsMenu.classList.toggle("hidden");
}

function addToFavorites() {
    alert("Song added to favorites!");
    // Switch button text or icon for "Remove from favorites"
}

function showLyricsPopup() {
    const lyricsPopup = document.getElementById("lyrics-popup");
    lyricsPopup.classList.remove("hidden");
    // Fetch and display lyrics in the textarea
}

function closeLyricsPopup() {
    const lyricsPopup = document.getElementById("lyrics-popup");
    lyricsPopup.classList.add("hidden");
}
