import './App.css';
import React from 'react';
import Header from '../Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CardHome from '../CardHome/CardHome';
import UnivSelector from '../UnivSelector/UnivSelector';

export const STATUS = { 
    HOME: 'HOME', 
    SIMULACRO: 'SIMULACRO'
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            universities: [
                {
                    name: 'Universidad Nacional del Santa',
                    shortName: 'UNS'
                },
                {
                    name: 'Universidad Nacional de Ingenieria',
                    shortName: 'UNI'
                },
            ],
            isSelectingUniversity: false,
            isDoingSimulacro: false,
            universitySelected: {},
            stopWatchStart: 0,
        };
    }
    updateIsSelectingUniversity = value => {
        this.setState({ isSelectingUniversity: value });
    }
    updateUniversitySelected = universitySelected => {
        this.setState({ 
            universitySelected: universitySelected,
            isSelectingUniversity: false,
            isDoingSimulacro: true,
        });
    }
    renderHome = () => {
        let getContent = () => <CardHome title="INICIAR SIMULACRO" updateIsSelectingUniversity={this.updateIsSelectingUniversity}/>;
        if(this.state.isSelectingUniversity) 
            getContent = () =>
                <UnivSelector 
                    universities={this.state.universities} 
                    updateUniversitySelected={this.updateUniversitySelected}
                />;
        if(this.state.isDoingSimulacro) 
            getContent = () => <></>
        return(
            <>
                <header>
                    <Header isDoingSimulacro={this.state.isDoingSimulacro}/>
                </header>
                <main>
                    {getContent()}
                </main>
                <footer>
                    
                </footer>
            </>
        )
    }
    render() {
        return (
            <BrowserRouter>
                {/* HEADER SECTION */}
                <Switch>
                    <Route path='/' exact component={() => this.renderHome()}/>
                    <Route path='/login' component={() => {}}/>
                    <Route path='*' component={() => <h1>error 404</h1>}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;