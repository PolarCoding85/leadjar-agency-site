import React from 'react'
import Process from '../../pages/home/contents/Process';

export default function ProcessCard(props) {
    const { process } = props

    return (
        <>
            <div className="process-item">
                <span className="process-count">{process.count} </span>
                <div className="time-line-icon"><i className={"fal " + process.icon}></i></div>
                <h4> {process.title}</h4>
                <p>{process.description}</p>
            </div>
            <span className="pr-dec"></span>
        </>
    );
}