import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ""};
  }

  render() {
    return (
      <div className="row py-3 shadow-sm">
        <div className="col-sm-9 mx-auto">
          <div className="input-group search-bar">
            <input className="form-control" 
              value={ this.state.term }
              onChange={ e => this.onInputChange(e.target.value) }
              placeholder="Search videos"
              autoFocus
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary px-4">
                <span className="oi oi-magnifying-glass"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;