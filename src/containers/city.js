import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

import {cityWeather} from '../actions/index';

class City extends React.Component {
    render() {
        console.log(this.props.cityWeather(this.props.params.city));
        return (
            <div>
                Hi {this.props.params.city}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({cityWeather}, dispatch);
}

function mapStateToProps(state) {
    return {selectedCity: state.selectedCity};
}

export default connect(null, mapDispatchToProps)(City);
