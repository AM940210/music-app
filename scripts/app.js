// Playlist and songs are stored here
let Playlists = [];

// DOM elements
const playlistNameInput = document.getElementById('playlist-name');
const createPlaylistButton = document.getElementById('create-playlist');
const playlistContainer = document.getElementById('palist-list');
const songTitleInput = document.getElementById('song-title');
const songArtistInput = document.getElementById('song-artist');
const songGenreInput = document.getElementById('song-genre');
const addSongButton = document.getElementById('add-song');

// function to create a playlist
createPlaylistButton.addEventListener('click', function() {
    const playlistName = playlistNameInput.value.trim();
    if (playlistName !== '') {
        const newPlaylist = {
            name: playlistName,
            songs: []
        };
    }

    Playlists.push(newPlaylist);
    playlistNameInput.value = '';
    renderPlaylists();
});

// Function to add a song to a playlist
addSongButton.addEventListener('click', function() {
    const sontTitle = songTitleInput.value.trim();
    const songArtistInput = songArtistInput.value.trim();
    const songGenre = songGenreInput.value.trim();

    if (songTitle && songArtist && songGenre) {
        const song = { title: songTitle, artist: songArtistInput, genre: songGenre };
        playlist[0].songs.push(song); // Add song to the first playlist
        songTitleInput.value = '';
        songArtistInput.value = '';
        songGenreInput.value = '';
        renderPlaylists();
    }
});

// Render playlist and their songs
function renderPlaylists() {
    playlistListContainer.innerHTML = '';

    Playlists.forEach(function(playlist) {
        const playlistItem = document.createElement('li');
        playlistItem.textContent = playlist.name;

        // List all songs in the playlist
        const songList = document.createElement('ul');
        playlist.songs.forEach(function(song) {
            const songItem = document.createElement('li');
            songItem.textContent = `${song.title} - ${song.artist} (${song.genre})`;
            SVGPointList.appChild(songItem);
        });

        playlistItem.appendChild(songList);
        playlistListContainer.appendChild(playlistItem);
    });
}