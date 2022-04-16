import './UnivSelector.css';
import React from "react";

class UnivSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: [] };
    }

    showResults = () => {
        return this.state.results.map(result => 
            <div 
                className="univ-selector-item" 
                key={result.shortName} 
                data-value={result} 
                onClick={e => this.props.updateUniversitySelected(e.target.dataset.value)}
            >
                {result.name}
            </div>
        );
    }

    search = (key, options) => {
        key = key.toLowerCase();
        let results = [...options.filter(option => 
            option.name.toLowerCase().includes(key) || 
            option.shortName.toLowerCase().includes(key)
        )];
        if(key === '') results = [];
        this.setState({ results: results });
    }
    render() {
        return (
            <div className="univ-selector-container">
                <div className="univ-selector-content">
                    <input 
                        placeholder='Buscar Universidad' 
                        onChange={e => this.search(e.target.value, this.props.universities)}
                    />
                    {this.showResults()}
                </div>
                
            </div>
        );
    }
}

export default UnivSelector;