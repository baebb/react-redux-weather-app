import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { cityWeather } from '../actions/index';
import GoogleMap from '../components/google_map';

class City extends React.Component {
    componentWillMount() {
        this.props.cityWeather(this.props.params.city);
    }

    render() {
        const { selectedCity } = this.props;
        if (!selectedCity) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        const { lon, lat } = selectedCity.city.coord;
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card text-xs-center">
                        <div className="card-block">
                            <h4 className="card-title">{selectedCity.city.name}</h4>
                        </div>
                        <div className="card-block gmap">
                            <GoogleMap lon={lon} lat={lat} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({cityWeather}, dispatch);
}

function mapStateToProps(state) {
    return {selectedCity: state.weather.city};
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
