import React from 'react';
import green_pea from './green_pea.svg';
import yellow_pea from './yellow_pea.svg';

function ButtonSquare(props) {
  return (
    <button className={props.buttonClass} onClick={props.onClick}>
      <img src={props.pea_type} className="button-pea" alt="button pea" /><br />
      {props.value}
    </button>
  );
}

function PeaSquare(props) {
  let peaSquareCurve = `pea-square ${props.bordercurve}`;
  return (
    <div className={peaSquareCurve}>
      <img src={props.pea_type} className="pea" alt="pea" /><br />
      {props.value}
    </div>
  );
}

function GridLabel(props) {
  let classN = `col grid-label-${props.horv}`
  return (
    <div className={classN}><p>{props.value}</p></div>
  );
}

class Game extends React.Component {
  renderButtonSquare(val, pt, i, sbs) {
    let buttonClass = 'button-square';
    if (sbs.indexOf(i) > -1) {
      buttonClass = 'button-square-selected'
    }
    return <ButtonSquare
            value={val}
            pea_type={pt}
            onClick={() => this.props.onClick(i, val)}
            buttonClass={buttonClass}
            />;
  }

  renderPeaSquare(bc, val) {
    let pea_type = green_pea
    if (val.indexOf("Y") > -1) {
      pea_type = yellow_pea
    }
    return <PeaSquare value={val} bordercurve={bc} pea_type={pea_type} />;
  }

  renderGridLabel(val, hov) {
    return <GridLabel value={val} horv={hov} />;
  }

  render() {
    return (
      <div className="container">

        <div className="row justify-content-md-center">
            <div className="col-md-10 offset-md-2">
              {this.renderButtonSquare('YY', yellow_pea, 0, this.props.selectedButtons)}
              {this.renderButtonSquare('Yy', yellow_pea, 1, this.props.selectedButtons)}
              {this.renderButtonSquare('yy', green_pea, 2, this.props.selectedButtons)}
            </div>

            <div className="row">
                <div className="col-md-3 d-flex flex-column vert-column">
                  {this.renderButtonSquare('YY', yellow_pea, 3, this.props.selectedButtons)}
                  {this.renderButtonSquare('Yy', yellow_pea, 4, this.props.selectedButtons)}
                  {this.renderButtonSquare('yy', green_pea, 5, this.props.selectedButtons)}
                </div>
                <div className="col">
                    <div className="row">
                      <div className="grid-label-empty"></div>
                      {this.renderGridLabel(this.props.parents[0][0], 'h')}
                      {this.renderGridLabel(this.props.parents[0][1], 'h')}
                    </div>

                    <div className="row">
                      {this.renderGridLabel(this.props.parents[1][0], 'v')}
                      {this.renderPeaSquare('top-left', this.props.offspring[0])}
                      {this.renderPeaSquare('top-right', this.props.offspring[1])}
                    </div>
                    <div className="row">
                      {this.renderGridLabel(this.props.parents[1][1], 'v')}
                      {this.renderPeaSquare('bottom-left', this.props.offspring[2])}
                      {this.renderPeaSquare('bottom-right', this.props.offspring[3])}
                    </div>

                </div>
            </div>
         </div>
      </div>
    );
  }
}

export default Game;