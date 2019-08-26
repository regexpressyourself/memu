import React, {useContext} from 'react';
import './charts.scss';
import {HistoryContext} from '../../context/HistoryContext';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {hourToAmpm, bucketSongTimes} from '../dateMappers';

function SongsByHour(props) {
  const {history} = useContext(HistoryContext);

  let hourDataRC = [];
  let hourMap = bucketSongTimes('hour', 24, history.history);

  for (let i = 0; i <= 23; i++) {
    hourDataRC.push({
      name: hourToAmpm(i),
      'Song Count': hourMap[i] ? hourMap[i].length : 0,
    });
  }

  return (
    <>
      <div className="chart-container">
        <h2>Frequency of music by hour</h2>
        <ResponsiveContainer>
          <AreaChart data={hourDataRC}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Song Count"
              stroke="#7f4782"
              fill="#aa5c9f"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default SongsByHour;