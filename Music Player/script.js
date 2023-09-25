document.addEventListener('DOMContentLoaded', function () {
    // Array to store playlists
    const playlists = [];
    let currentPlaylistIndex = -1;
    let currentTrackIndex = -1;

    // Get HTML elements
    const newPlaylistInput = document.getElementById('new-playlist');
    const createPlaylistButton = document.getElementById('create-playlist');
    const playlistList = document.querySelector('.playlist-list');
    const trackList = document.querySelector('.track-list');
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');

    // Function to create a new playlist
    function createPlaylist() {
        const playlistName = newPlaylistInput.value.trim();
        if (playlistName !== '') {
            // Create a new playlist object and add it to the array
            playlists.push({ name: playlistName, tracks: [] });

            // Clear the input field
            newPlaylistInput.value = '';

            // Update the playlist list
            updatePlaylistList();
        }
    }

    // Function to update the playlist list
    function updatePlaylistList() {
        playlistList.innerHTML = '';

        playlists.forEach((playlist, index) => {
            const li = document.createElement('li');
            li.textContent = playlist.name;
            li.dataset.index = index;
            playlistList.appendChild(li);

            // Add click event listener to load playlist tracks
            li.addEventListener('click', () => loadPlaylist(index));
        });
    }

    // Function to load a playlist and display its tracks
    function loadPlaylist(index) {
        currentPlaylistIndex = index;
        currentTrackIndex = -1;

        // Update the track-list section with the tracks from the selected playlist
        const selectedPlaylist = playlists[index];
        trackList.innerHTML = '';

        selectedPlaylist.tracks.forEach((track, trackIndex) => {
            const li = document.createElement('li');
            li.textContent = track.name;

            // Add click event listener to play track
            li.addEventListener('click', () => playTrack(trackIndex));

            trackList.appendChild(li);
        });
    }

    // Function to play a track
    function playTrack(trackIndex) {
        currentTrackIndex = trackIndex;
        const selectedPlaylist = playlists[currentPlaylistIndex];
        const selectedTrack = selectedPlaylist.tracks[currentTrackIndex];
        audioPlayer.src = selectedTrack.src;
        audioPlayer.play();
    }

    // Event listeners
    createPlaylistButton.addEventListener('click', createPlaylist);
    playButton.addEventListener('click', () => audioPlayer.play());
    pauseButton.addEventListener('click', () => audioPlayer.pause());

    // Initial update of the playlist list
    updatePlaylistList();
  
});
