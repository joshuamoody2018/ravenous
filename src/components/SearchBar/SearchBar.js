import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        //set state to hold information to pass yelp API
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        //bindings
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        //object created to store options, values are determined by yelp API
        this.sortByOptions = {
            'Best Match':'best_match',
            'Highest Rated':'rating',
            'Most Reviewed':'review_count'
        };
    }

    //EVENT HANDLERS-
    //is used inside renderSortByOptions to determine className as 'active' or '' for each <li>.  CSS uses className='active' to highlight current chosen sort-option
    getSortByClass(sortByOption){
        return this.state.sortBy === sortByOption ? 'active' : '';
    }

    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption});
    }

    handleTermChange(event){
        this.setState({term: event.target.value});
    }

    handleLocationChange(event){
        this.setState({location: event.target.value});
    }

    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }

    handleKeyPress(event){
        if(event.key === 'Enter'){
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        }
    }

    //renders sortByOptions over search bar
    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
        });
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>{this.renderSortByOptions()}</ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Business" onChange={this.handleTermChange} onKeyPress={this.handleTermChange, this.handleKeyPress}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange} onKeyPress={this.handleLocationChange, this.handleKeyPress}/>
                </div>
                <div className="SearchBar-submit">
                    <button onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        );
    }
}

export default SearchBar;