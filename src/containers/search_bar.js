import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange (event) {
        console.log(event.target.value);
        this.setState({term: event.target.value})
    }

    formSubmit (event) {
        event.preventDefault();
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.formSubmit}>
                <input
                    placeholder="Get 5 day forecast for your city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

export default SearchBar;