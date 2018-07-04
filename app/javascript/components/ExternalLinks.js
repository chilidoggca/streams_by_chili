import React, {Component} from 'react';

class ExternalLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      selected: ""
    }
  }

  onMouseOverGithubEvent = (event) => {
    this.setState({
      description: "github"
    });
  }
  onMouseOverLinkedinEvent = (event) => {
    this.setState({
      description: "linkedin"
    });
  }
  onMouseOverPortfolioEvent = (event) => {
    this.setState({
      description: "portfolio"
    });
  }
  onMouseOutEvent = (event) => {
    this.setState({
      description: ""
    });
  }
  onFocusGithubEvent = (event) => {
    this.setState({
      selected: "github"
    });
  }
  onFocusLinkedinEvent = (event) => {
    this.setState({
      selected: "linkedin"
    });
  }
  onFocusPortfolioEvent = (event) => {
    this.setState({
      selected: "portfolio"
    });
  }
  onBlurEvent = (event) => {
    this.setState({
      selected: ""
    });
  }

  render() {
    const {description, selected} = this.state;
    return (
      <div className="ExternalLinks" style={{
        width: '150px', opacity: '0.8', display: 'inline-block',
        padding: '20px 10px'
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          flexDirection: 'row'
        }}>
          <a href="https://www.github.com/chilidoggca/streams_by_chili"
            target="_blank" className="external-links"
            onFocus={this.onFocusGithubEvent}
            onMouseOver={this.onMouseOverGithubEvent}
            onMouseOut={this.onMouseOutEvent}
            onBlur={this.onBlurEvent}
          >
            <i className="fab fa-github-alt"></i>
          </a>
          <a href="https://www.linkedin.com/in/jackclee"
            target="_blank" className="external-links"
            onFocus={this.onFocusLinkedinEvent}
            onMouseOver={this.onMouseOverLinkedinEvent}
            onMouseOut={this.onMouseOutEvent}
            onBlur={this.onBlurEvent}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="http://www.jackclee.com"
            target="_blank" className="external-links"
            onFocus={this.onFocusPortfolioEvent}
            onMouseOver={this.onMouseOverPortfolioEvent}
            onMouseOut={this.onMouseOutEvent}
            onBlur={this.onBlurEvent}
          >
            <i className="fas fa-globe-americas"></i>
          </a>
        </div>
        <div className="external-link-description" style={{
          display: 'flex', justifyContent: 'center',
          alignItems: 'center', color: '#ffffff',
          padding: '10px 0px'
        }}>
        &nbsp;{(description) ? description : selected}
      </div>
    </div>
    )
  }
}

export {ExternalLinks};
