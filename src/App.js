import React from 'react'

//Компоненты
import Titles from './components/title'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = 'e8cee1a223202a3c6648bcc7f3b77289';

class App extends React.Component {
  state = {
    temperture: undefined,
    city: undefined, 
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    city && country ? this.setState({ temperature: data.main.temp, city: data.name, country: data.sys.country,humidity: data.main.humidity, description: data.weather[0].description, error: "" }) : this.setState({temperature: undefined, city: undefined, country: undefined, humidity: undefined, description: undefined, error: 'The values are not correct'})
  }

  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather} />
                <Weather 
                  temperature={this.state.temperature}  
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

        

export default App