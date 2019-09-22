const days = () => {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
};
const months = () => {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
};

const hourToAmpm = hour => {
  let meridiem = 'am';

  if (hour >= 12) {
    hour = hour - 12;
    meridiem = 'pm';
  }
  if (hour === 0) {
    hour = 12;
  }
  return hour + meridiem;
};

const accessibleTime = unixTime => {
  let date = new Date(unixTime * 1000);
  let year = date.getFullYear();
  let month = months()[date.getMonth()];
  let day = date.getDate();
  let dow = date.getDay();
  let dowName = days()[date.getDay()];
  let hour = date.getHours();
  let minutes = '0' + date.getMinutes();
  minutes = minutes.substr(-2);
  let seconds = '0' + date.getSeconds();
  seconds = seconds.substr(-2);
  let meridiem = 'am';
  if (hour >= 12) {
    meridiem = 'pm';
  }
  let ampmHour = hour % 12;
  let time = ampmHour + ':' + minutes + meridiem;

  return {
    date: `${month} ${day}, ${year}`,
    time: time,
    month: month,
    day: day,
    dow: dow,
    dowName: dowName,
    year: year,
    hour: hour,
    minutes: minutes,
    seconds: seconds,
  };
};
const accessibleJsTime = jsDate => {
  let date = jsDate;
  let year = date.getFullYear();
  let month = months()[date.getMonth()];
  let day = date.getDate();
  let dow = date.getDay();
  let dowName = days()[date.getDay()];
  let hour = date.getHours();
  let minutes = '0' + date.getMinutes();
  minutes = minutes.substr(-2);
  let seconds = '0' + date.getSeconds();
  seconds = seconds.substr(-2);
  let meridiem = 'am';
  if (hour >= 12) {
    meridiem = 'pm';
  }
  let ampmHour = hour % 12;
  let time = ampmHour + ':' + minutes + meridiem;

  return {
    date: `${month} ${day}, ${year}`,
    time: time,
    month: month,
    day: day,
    dow: dow,
    dowName: dowName,
    year: year,
    hour: hour,
    minutes: minutes,
    seconds: seconds,
  };
};
const getDatesBetween = (start, end) => {
  let datesBetween = [];
  while (start < end) {
    let year = start.getFullYear();
    let month = months()[start.getMonth()];
    let day = start.getDate();
    let date = `${month} ${day}, ${year}`;
    datesBetween.push(date);
    start.setDate(start.getDate() + 1);
  }
  return datesBetween;
};

const matchGenre = (song, genre) => {
  if (
    genre &&
    genre !== 'any' &&
    ![song.genre1, song.genre2, song.genre3, song.genre4].includes(genre)
  ) {
    return null;
  } else {
    return song;
  }
};

const serializeSongList = (songList, bucketMaxSize, bucketKey) => {
  let map = new Array(bucketMaxSize);
  for (let song of songList) {
    let date = song.date;
    let accessibleDate = accessibleTime(date);
    let key = accessibleDate[bucketKey];

    if (map[key]) {
      map[key].push(song);
    } else {
      map[key] = [song];
    }
  }
  return map;
};

const bucketSongTimes = (bucketKey, bucketMaxSize, songList, genre = null, genre2 = null) => {
  /*
   * The "map" holds an array with a definition of:
   * [{ timeSlot: [Song1, Song2, ...] }, ... ]
   * where timeSlot is the bucketed property's value (day of week,
   * time of day, etc.), and Song1, Song2, etc. are the song objects
   * from Last.fm.
   */

  let songList1 = songList.filter(song => matchGenre(song, genre));
  let songList2 = songList.filter(song => matchGenre(song, genre2));
  let map1 = serializeSongList(songList1, bucketMaxSize, bucketKey);
  let map2 = serializeSongList(songList2, bucketMaxSize, bucketKey);
  return {
    genre: map1,
    genre2: map2,
  };
};

export {
  days,
  months,
  hourToAmpm,
  accessibleTime,
  accessibleJsTime,
  getDatesBetween,
  bucketSongTimes,
};
