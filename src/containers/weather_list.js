import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import Chart from '../components/chart';

class WeatherList extends React.Component {
    renderWeather(cityData) {
        // console.log(cityData);
        const temps = cityData.list.map((weather) => weather.main.temp);
        const pressures = cityData.list.map((weather) => weather.main.pressure);
        const humidities = cityData.list.map((weather) => weather.main.humidity);

        return (
            <tr key={cityData.city.name}>
                <td>
                    <Link to={"city/"+cityData.city.name}>
                        {cityData.city.name}
                    </Link>
                </td>
                <td>
                    <Chart data={temps} color="red" units="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="orange" units="%"/>
                </td>
            </tr>
        )
    }

    render() {
        console.log(this.props.weather);
        return (
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
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {weather: state.weather.all};
}

export default connect(mapStateToProps)(WeatherList);
