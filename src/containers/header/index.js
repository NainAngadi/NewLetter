import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';
import logo from './../../assets/images/volvoLogo.jpg';
import { withRouter } from 'react-router-dom';
// import moment from 'moment';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.popoverRef = React.createRef();
    }

    showPopOver = () => {
        this.popoverRef.current.style.visibility = !this.popoverRef.current.style.visibility ? 'visible' : '';
    }


    render() {
        return (
            <div className="topDiv">
                <div className="subDiv brandDiv">
                    <div className="positionRelative">
                        <img src={logo} className="brandLogo" alt="brand logo" />
                    </div>
                    <div className="positionRelative title">
                        .Net Connect
                    </div>
                    <div className="positionRelative">
                        <button className="userButton popover-control" onClick={() => this.showPopOver()}>
                            Member
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
                                        <a href="/topic">Your Articles</a>
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
                                    <a href="">Technical</a>
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

const mapStateToProps = ({ Category }) => ({
    categories: Category.category
});


export default withRouter(connect(
    mapStateToProps,
    null
)(Header));
