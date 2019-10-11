import React, {useState, useEffect, useContext} from 'react';
import {ConfigContext} from '../context/ConfigContext';
import {accessibleJsTime} from '../functions/dateMappers';
import {isGenre1, isGenre2} from '../functions/genres';

const UserInfo = () => {
  const {config} = useContext(ConfigContext);
  let [genreInfo, setGenreInfo] = useState(null);
  let [prevDateDisplay, setPrevDateDisplay] = useState(false);
  let [prevDateText, setPrevDateText] = useState(false);

  useEffect(() => {
    let isGenre1Eval = isGenre1(config.genre, config.genre2);
    let isGenre2Eval = isGenre2(config.genre, config.genre2);

    if (isGenre1Eval && isGenre2Eval) {
      setGenreInfo(
        <div>
          <p className="user-info__more-info">
            <span className="genre">{config.genre}</span>
            &nbsp; &amp; &nbsp;
            <span className="genre2">{config.genre2}</span>
          </p>
        </div>,
      );
    } else if (isGenre1Eval) {
      setGenreInfo(
        <div>
          <p className="user-info__more-info">{config.genre}</p>
        </div>,
      );
    } else {
      setGenreInfo(null);
    }
  }, [config.genre, config.genre2]);

  useEffect(() => {
    if (config.prevTimeStart != null && !isNaN(config.prevTimeStart)) {
      setPrevDateDisplay(true);
      setPrevDateText(accessibleJsTime(config.prevTimeStart).date);
    } else {
      setPrevDateDisplay(false);
    }
  }, [config.prevTimeStart, config.timeStart]);

  return (
    <section className="user-info">
      <p className="user-info__username">{config.username}</p>
      <div>
        <p className="user-info__more-info">
          {accessibleJsTime(config.timeStart).date}
          &nbsp; &mdash; &nbsp;
          {accessibleJsTime(config.timeEnd).date}
        </p>
        {!prevDateDisplay ? null : (
          <p className="user-info__more-info">
            {prevDateText}
            &nbsp; &mdash; &nbsp;
            {accessibleJsTime(config.timeStart, true).date}
          </p>
        )}
      </div>
      {genreInfo}
    </section>
  );
};
export default UserInfo;
