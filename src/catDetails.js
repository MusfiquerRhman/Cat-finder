import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class catDetails extends Component {
    render() {
        let {cat} = this.props;
        return (
            <div className="container">
                <div className="catDetails row justify-content-center mt-5">
                    <div className="coll-11 col-lg-5">
                        <div className="catDetails-card card">
                            <img className="card-img-top" src={cat.src} alt = {cat.name}/>
                            <div className="card-body">
                                <h2 className="card-title">{cat.name}</h2>
                                <h4 className="card-subtitle text-muted">{cat.age} years old </h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                {cat.facts.map((fact, i) => (
                                    <li className="list-group-item" key={i}>{fact}</li>
                                ))}
                            </ul>
                            <div className="card-body">
                                <Link to = '/cats' className="btn btn-info">Go Back!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
