import React from 'react'

const Weather = props => (

      <div className="weather__info">
        { props.city && props.country ? <p>Location: <span>{props.city}, {props.country}</span></p> : '' }
        { props.temperature ? <p>Temperature: <span>{props.temperature}</span></p> : ''}
        { props.humidity ? <p>Humidity: <span>{props.humidity}</span></p> : ''}
        { props.description ? <p>Conditions: <span>{props.description}</span></p> : ''}
        { props.error ? <p className="weather__error ">{props.error}</p> : ''}
      </div>
)

export default Weather