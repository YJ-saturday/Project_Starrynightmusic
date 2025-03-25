$(document).ready(function () {
  var songs = [
    {
      title: 'Blizzards',
      file: './music/Blizzards.mp3',
      image: './img/ppunsig.png',
      desc: 'Blizzards 곡 설명 예시',
    },
    {
      title: 'Calm',
      file: './music/Calm.mp3',
      image: './img/ppunsig.png',
      desc: 'Calm 곡 설명 예시',
    },
    {
      title: 'Dusty_Road',
      file: './music/Dusty_Road.mp3',
      image: './img/ppunsig.png',
      desc: 'Dusty_Road 곡 설명 예시',
    },
    {
      title: 'Escape',
      file: './music/Escape.mp3',
      image: './img/ppunsig.png',
      desc: 'Escape 곡 설명 예시',
    },
    {
      title: 'Payday',
      file: './music/Payday.mp3',
      image: './img/ppunsig.png',
      desc: 'Payday 곡 설명 예시',
    },
    {
      title: 'Retreat',
      file: './music/Retreat.mp3',
      image: './img/ppunsig.png',
      desc: 'Retreat 곡 설명 예시',
    },
    {
      title: 'Seasonal',
      file: './music/Seasonal.mp3',
      image: './img/ppunsig.png',
      desc: 'Seasonal 곡 설명 예시',
    },
    {
      title: 'Vespers',
      file: './music/Vespers.mp3',
      image: './img/ppunsig.png',
      desc: 'Vespers 곡 설명 예시',
    },
  ];

  var currentIndex = 0;

  var $albumImg = $('#albumImg');
  var $songTitle = $('#songTitle');
  var $songDesc = $('#songDesc');
  var $audioPlayer = $('#audioPlayer');
  var $prevBtn = $('#prevBtn');
  var $playPauseBtn = $('#playPauseBtn');
  var $nextBtn = $('#nextBtn');

  function updatePlayer(index) {
    var selectedSong = songs[index];
    $songTitle.text(selectedSong.title);
    $songDesc.text(selectedSong.desc);
    $albumImg.attr('src', selectedSong.image);
    $audioPlayer.attr('src', selectedSong.file);
    $audioPlayer.get(0).load();
  }

  function updatePlayPauseBtn() {
    $playPauseBtn.html(
      $audioPlayer.get(0).paused
        ? '<i class="fa-solid fa-play"></i>'
        : '<i class="fa-solid fa-pause"></i>'
    );
  }

  updatePlayer(currentIndex);

  $prevBtn.on('click', function () {
    var wasPlaying = !$audioPlayer.get(0).paused;
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    updatePlayer(currentIndex);
    if (wasPlaying) $audioPlayer.get(0).play();
    updatePlayPauseBtn();
  });

  $nextBtn.on('click', function () {
    var wasPlaying = !$audioPlayer.get(0).paused;
    currentIndex = (currentIndex + 1) % songs.length;
    updatePlayer(currentIndex);
    if (wasPlaying) $audioPlayer.get(0).play();
    updatePlayPauseBtn();
  });

  $playPauseBtn.on('click', function () {
    if ($audioPlayer.get(0).paused) {
      $audioPlayer.get(0).play();
    } else {
      $audioPlayer.get(0).pause();
    }
  });

  $audioPlayer.on('play pause', function () {
    updatePlayPauseBtn();
  });
});
