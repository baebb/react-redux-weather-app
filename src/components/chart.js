import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    let sum = 0;
    data.forEach(function(number){
        sum += number;
    })
    return Math.round(sum/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines svgWidth={240} svgHeight={160} data={props.data} >
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Avg: {average(props.data)} {props.units}</div>
        </div>
    )
}