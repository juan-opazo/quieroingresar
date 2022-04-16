import './Header.css';
import React from 'react';
import { STATUS } from '../App/App.js';
import Counter from '../StopWatch/StopWatch';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    renderIcon() {
        if(this.props.isDoingSimulacro) {
            return (
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
            )
        } else {
            return (
                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            ); 
        }
        

    }
    renderContent() {
        if(this.props.isDoingSimulacro) {
            setInterval(() => {
                this.setState({ counter: this.state.counter + 1})
            }, 1000);
            return (
                <div className='container doing-simulacro'>
                    <div className='menu-icon'>
                        {this.renderIcon()}
                    </div>
                    <div className='content score'>
                        <h3>0/64</h3>
                    </div>
                    <div className='content counter'>
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                        </svg>
                    </div>
                    
                </div>
                
            )
        } else {
            return (
                <div className='container'>
                    <div className='menu-icon'>
                        {this.renderIcon()}
                    </div>
                    <div className='content'>
                        <img src='header-logo.png' alt='quiero ingresar' width='50'/>
                    </div>
                    
                </div>
                
            ); 
        }
    }
    render() {
        return (
            <>
                {this.renderContent()}
            </>
        );
    }
}

export default Header;