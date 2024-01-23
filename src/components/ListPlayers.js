import React, { useState, useEffect } from 'react';

export const ListPlayers = (props) => {
    const [color, setColor] = useState('red');
    const [summary, setSummary] = useState({ avg: 0, sum: 0 });
    const [players, setPlayers] = useState([]);

    const getTotalPoints = (data = []) => {
        let totalPoints = 0;

        data.forEach(element => {
            totalPoints += element.points
        });

        return totalPoints;
    }

    const getAvgPoints = (data = []) => {
        let avgPoints = 0;

        data.forEach(element => {
            avgPoints += element.points
        });

        avgPoints = avgPoints / data.length
        return avgPoints;
    }

    useEffect(() => {
        fetch('players.json').then((response) => response.json()).then(({ data }) => {
            const avg = getAvgPoints(data);
            const sum = getTotalPoints(data);

            setPlayers(data);
            setSummary({ avg, sum })
        })
    }, [])

    return (
        <div className="App">
            <h1>Players points table by Bartosz Kulpa</h1>

            <div className="button__container">
                <button className="button" onClick={() => setColor('red')} >Red</button>
                <button className="button" onClick={() => setColor('blue')} >Blue</button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>USERNAME</th>
                        <th>POINTS</th>
                    </tr>
                </thead>

                <tbody>
                    {players.map((player, index) => <tr className={player.points > 100 ? color : ''} key={index}>
                        <td>{player.username}</td>
                        <td className="points">{player.points}</td>
                    </tr>)
                    }

                    <tr>
                        <th>TOTAL</th>
                        <td className="points">{summary.sum}</td>
                    </tr>
                    <tr>
                        <th>AVG</th>
                        <td className="points">{summary.avg}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};