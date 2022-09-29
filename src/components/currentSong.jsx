import React from 'react';
import {LastFmData} from './LastFmData';

class currentSong extends React.Component {
    state = {showing: true};

    render() {
        const apiKey = process.env.REACT_APP_API_KEY;
        const {showing} = this.state;

        return (
            <>
                <button onClick={() => this.setState({showing: !showing})}>add music</button>
                {showing
                    ? <div className="lastfm">
                        <LastFmData
                            userName={'pityparty-'}
                            apiKey={'$apiKey'}
                        />
                    </div>
                    : null
                }
            </>
        )
    }
}

export {currentSong};