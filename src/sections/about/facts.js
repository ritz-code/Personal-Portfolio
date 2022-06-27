import React from "react";
import '../../styles/scss/_facts.scss'
import { facts } from "../../data/constants";

function Facts() {
    return (
        <>
            <div className="factsContainer">
                <h2>Some defining words</h2>

                <div className="cardsContainer">
                    {facts.map((fact) => {
                        return (
                            <div className="factCard" key={fact.number}>
                                <div className="circle">{fact.number}</div>
                                <div className="front">
                                    <h5>{fact.heading}</h5>
                                    <hr />
                                    <p>{fact.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Facts;