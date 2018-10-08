import React, { Component } from 'react';
import './home.css';
import Featured from './featured.react';
import TopPicks from './toppicks.react';
import Articles from './article.react';
import Awards from './awards.react';
import logo from './../../assets/images/volvoLogo.jpg';

class Home extends Component {
    render(){
        return(
            <div className="home-container">
                <div className="home-0">
                    <TopPicks />
                    <Featured additionalClass = 'height350'/>
                    <Featured additionalClass = 'width26'/>
                </div>
                <hr style={{width: '90%', border: '0.5px solid rgba(0,0,0,0.14)', margin: '15px auto'}}/>
                <div className="home-1">
                    <Articles />
                    <Awards />
                </div>
            </div>
        );
    }
}

export default Home;