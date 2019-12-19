class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const totalTime = player.getDuration();
  }
  
}

const helper = new Helper();
