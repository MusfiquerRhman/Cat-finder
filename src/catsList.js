import React, { Component } from 'react'
import './catList.css'

export default class catsList extends Component {
    render() {
        return (
            <div className="cats-list">
                <h1 className="display-1 text-center">Cats list!</h1>
                <div className="container">
                    <div className="row">
                        {this.props.cats.map(d => (
                            <div className="cat col-md-6 col-lg-4 text-center">
                                <img src={d.src} alt = {d.name}/>
                                <h3>{d.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

