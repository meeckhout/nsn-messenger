import React, {useState, useEffect} from 'react';

const LastFmData= () => {
    const [lfmData, updateLfmData] = useState({});
    useEffect(() => {
        const apiKey = process.env.REACT_APP_LASTFM_CLIENT_ID;
        const userName = process.env.REACT_APP_LASTFM_CLIENT_NAME;
        fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('error');
            })
            .then(data => updateLfmData(data))
            .catch(() =>
                updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
            );
    }, []);

    const buildLastFmData = () => {
        const  { error } = lfmData;
        const track = lfmData?.recenttracks?.track;

        if (error) {
            return <p>{error}</p>;
        }

        if (!track) {
            return <p>Loading</p>;
        }

        const [
            { name: songName, artist: { '#text': artistName } = {} } = {}
        ] = track;

        return <span>
            <br />{songName} by {artistName}
            </span>
    };

    return buildLastFmData();
};

export { LastFmData }