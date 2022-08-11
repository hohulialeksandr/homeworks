import React from 'react';

import './Statistics.css'

const Statistics = ({stats}) => {
    return (
        <div>
            <section className="statistics">
                <h2 className="title">Upload stats</h2>

                <ul className="stat_list">
                    {stats.map((e, id) => <li className="docx" key={id}>
                        <span className="label">{e.label}</span>
                        <span className="percentage">{e.percentage}</span>
                    </li>)}
                </ul>
            </section>
        </div>
    )
}

export default Statistics