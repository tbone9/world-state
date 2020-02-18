import React, { Component } from 'react';
import DataCards from '../DataCards';

class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            today: ''
        }
    }

    handleClick = async() => {
        try {
            const data = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=demo')
            // const data = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=CL=F&apikey=UQM312LQCTA4GN5U')
            let parsedData = await data.json();
            parsedData = parsedData['Time Series (Daily)']
            parsedData = Object.values(parsedData)
            console.log(parsedData[0]['4. close'])
            this.setState({
                data: parsedData,
                today: parsedData[0]['4. close']
            })
            console.log(this.state.today)
        } catch(err){
            console.log(err);
        }
    }

    render() {
        
        return(
            <div>
                <h1>main container</h1>
                <h2>Today's price: {this.state.today}</h2>
                <button onClick={this.handleClick}>click for data</button>

                <DataCards data={this.state.data} />
            </div>
        
        )
    }
}

export default MainContainer;