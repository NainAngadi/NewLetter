import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';
import volvoLogo from './../../assets/images/volvoLogo.jpg';
import { withRouter } from 'react-router-dom';
import { getUserArticle } from '../../modules/actions';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.popoverRef = React.createRef();
    }

    showPopOver = () => {        
        if(this.props.User.name){
            this.props.getUserArticle(this.props.User._id);
        }

        this.popoverRef.current.style.visibility = !this.popoverRef.current.style.visibility ? 'visible' : '';
    }

    onUserClick= () => {
        if(!this.props.User.name){
            this.props.history.push("/setting");
        } 
        this.props.history.push("/topic");
    }

    render() {
        return (
            <div className="topDiv">
                <div className="subDiv brandDiv">
                    <div className="positionRelative">
                        <img src={volvoLogo} className="brandLogo" alt="brand logo" />
                    </div>
                    <div className="positionRelative title">
                        .Net Connect
                    </div>
                    <div className="positionRelative">
                        <button className={'profile-button'} onClick={() => this.showPopOver()}>
                            <img className={'avatar-image default-image'} src={ this.props.User.img || 'http://localhost:8000/static/defaultUser.png' } style={{width: '35px', height: '35px'}}></img>
                        </button>
                        <div className="popover" ref={this.popoverRef}>
                            <ul>
                                <li  onClick={() => this.showPopOver()}>
                                    <span className={'popover-text'}>
                                        <a href="/article/create">New Article</a>
                                    </span>
                                </li>
                                <li  onClick={() => this.showPopOver()}>
                                    <span className={'popover-text'}>
                                        <a href="javascript:void(0);" onClick={() => this.onUserClick()}>Your Articles</a>
                                    </span>
                                </li>
                                <li  onClick={() => this.showPopOver()}>
                                    <span className={'popover-text'}>
                                        <a href="#">Publications</a>
                                    </span>
                                </li>
                                <li style={{ borderBottom: '0.5px solid grey', padding: '5px 0' }}></li>
                                <li  onClick={() => this.showPopOver()}>
                                    <span className={'popover-text'}>
                                        <a href="#">Bookmarks</a>
                                    </span>
                                </li>
                                <li  onClick={() => this.showPopOver()}>
                                    <span className={'popover-text'}>
                                        <a href="#">Help</a>
                                    </span>
                                </li>
                                <li  onClick={() => this.showPopOver()}>
                                    <span className={'popover-text'}>
                                        <a href="/setting">Setting</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="subDiv">
                    <nav>
                        <div className="flexTop">
                            <li>
                                <span className="navText">
                                    <a href="">Home</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">General</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="/topic/5bc5ad8b6c09a23f8c13ad20">Technical</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">Success Stories</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">Awards</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">Did you Know</a>
                                </span>
                            </li>
                            <li>
                                <span className="navText">
                                    <a href="">Archive</a>
                                </span>
                            </li>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ Category, User }) => ({
    categories: Category.category,
    User: User.User
});


export default withRouter(connect(
    mapStateToProps,
    {
        getUserArticle
    }
)(Header));
