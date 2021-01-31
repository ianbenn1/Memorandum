import React from 'react';
import './style.css';

export default class Header extends React.Component {
    render(){
        return (
            <div className="header">
                <div className="header-content">
                    <div className="left">
                        <img src="/assets/img/icon-d-g2.png" alt="Memorandum Icon" className="icon" />
                    </div>
                    <div className="right">
                        <div className="top">
                            <h1>Memorandum</h1>
                            <h6>Notes, fast.</h6>
                        </div>
                        <div className="bottom">
                            New Open <p className="SaveState">Saved</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}