import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

import {cityWeather} from '../actions/index';

class City extends React.Component {
    renderWeather(cityData) {
        console.log(cityData.city.name);
    }
    getData() {
        this.props.cityWeather(this.props.params.city);
    }

    render() {
        console.log(this.props.selectedCity);
        return (
            <div>
                Hi {this.props.params.city}
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderWeather(this.props.selectedCity)}
                    </tbody>
                </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(City);
