import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchList } from '../redux/actions';

class SearchComponent extends Component{
  state = {
    query: this.props.query
  };

  onInputChange = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  onButtonClick = (e) => {
    this.props.searchList(this.state.query);
  }

  render() {
    return (
      <div className="search">
        <input type="text" 
          value={this.state.query} 
          onChange={this.onInputChange}
        />
        <button onClick={this.onButtonClick}>Search</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.query
  };
}

const mapDispatchToProps = {
  searchList
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);