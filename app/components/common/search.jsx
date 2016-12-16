import React from 'react';


export default class Search extends React.Component {
  search(e) {
  	e.preventDefault();

  	var value = this.refs.search.value,
  		model = this.props.model;

  	if (!value) {
  	  this.props.searchCallback(null);
  	  return false; // Reset
  	}


  	var additionalPiece = null
  	if (this.props.additionalUrlPiece)
  		additionalPiece = '/' + this.props.additionalUrlPiece;

  	model.search({ query: value }, additionalPiece).then(function(searchResults) {
  		this.props.searchCallback(searchResults);
  	}.bind(this))

  	return false;
  }

  render() {
    return (
     	<form onSubmit={this.search.bind(this)} className={'search input-group ' + this.props.className}>
    		<input type="text" ref='search' className="form-control" placeholder="Search" />
    		<span className="input-group-addon"><i className='fa fa-search'></i></span>
    	</form>
    );
  }
}
