import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import green_pea from './green_pea.svg';
import yellow_pea from './yellow_pea.svg';
import Game from './Game';
import PhenoRatio from './PhenoRatio';
import GenoRatio from './GenoRatio';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parents: ['YY', 'YY'],
      selectedButtons: [0, 3],
      offspring: ['YY', 'YY', 'YY', 'YY']
    };
  }
  handleClick(i, val) {
    const parents = this.state.parents.slice();
    const selectedButtons = this.state.selectedButtons.slice()
    if (i < 3) {
        parents[0] = val;
        selectedButtons[0] = i;
    } else {
        parents[1] = val;
        selectedButtons[1] = i;
    }
    this.setState({parents: parents});
    this.setState({offspring: this.calculateOffspring(parents)})
    this.setState({selectedButtons: selectedButtons});
  }
  calculateOffspring(parents) {
    let offspring = []
    if (parents[1][0] === 'Y' && parents[0][0] ==='y')
    {
        offspring.push(parents[1][0] + parents[0][0])
    } else {
        offspring.push(parents[0][0] + parents[1][0])
    }
    if (parents[1][0] === 'Y' && parents[0][1] ==='y') {
        offspring.push(parents[1][0] + parents[0][1])
     } else {
        offspring.push(parents[0][1] + parents[1][0])
     }
    if (parents[1][1] === 'Y' && parents[0][0] ==='y') {
        offspring.push(parents[1][1] + parents[0][0])
     } else {
        offspring.push(parents[0][0] + parents[1][1])
     }
    if (parents[1][1] === 'Y' && parents[0][1] ==='y') {
        offspring.push(parents[1][1] + parents[0][1])
     } else {
        offspring.push(parents[0][1] + parents[1][1])
     }
     return offspring;
  }
  render() {
      return (
        <div className="App">
        <div className="row">
          <div className="game-area col-md-8 col-xs-12">
            <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1>Logo | </h1>
                    <h4>Mendelian Inheritance</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="container">
                      <div className="col-12 text-center">
                          <h2>Select two pea plant genotypes to cross.</h2>
                      </div>
                      <div className="col-12 text-center">
                          <Game
                          parents={this.state.parents}
                          offspring={this.state.offspring}
                          selectedButtons={this.state.selectedButtons}
                          onClick={(i, val) => this.handleClick(i, val)}
                          />
                      </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="display-area col-md-4 col-xs-12">
            <div className="row  align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>Phenotypic Ratio</h2>
                      <PhenoRatio
                      offspring={this.state.offspring}
                      />

                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <h2>Genotypic Ratio</h2>
                      <GenoRatio
                      offspring={this.state.offspring}
                      />
                  </div>
                </div>
              </div>
             </div>
          </div>
        </div>
        </div>
  );
  }
}

export default App;
