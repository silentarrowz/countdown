import React, {Component} from 'react';
import './App.css';


class Clock extends Component {
		constructor(props){
			super(props);
			this.state={
				days:0,
				hours:0,
				minutes:0,
				seconds:0
			}

		this.getTimeUntil = this.getTimeUntil.bind(this);
		}

		componentDidMount(){
		
		setInterval(()=>this.getTimeUntil(this.props.date),1000);
			
		}
		leading0(num){
			if(num<10){
				return '0'+num;
			}

			return num;
		}

		componentWillReceiveProps(newProps){
			this.getTimeUntil(newProps.date);
			
		}

		getTimeUntil(date){
			const time=Date.parse(date) - Date.parse(new Date()) ;
			var seconds_left=time/1000;
			const days = this.leading0(parseInt(seconds_left/(60*60*24)));
			seconds_left= seconds_left%86400;
			console.log('new date is : ',this.props.date);
			console.log('time is : ',time);
			const hours = this.leading0(parseInt(seconds_left/(60*60)));
			 seconds_left=seconds_left%3600;
			const minutes = this.leading0(Math.floor((seconds_left/60)%60));

			const seconds = this.leading0(Math.floor(seconds_left%60));
				
				
				

			console.log('days :',days, 'hours:',hours,'minutes : ',minutes, 'seconds : ',seconds);		
			this.setState({days,hours,minutes,seconds});


		}

 render(){
		//this.getTimeUntil(this.props.date);

		return(
			<div>

		<div className="Clock-days">{this.state.days} days</div>
                <div className="Clock-hours"> {this.state.hours} hours </div>
                <div className="Clock-minutes">{this.state.minutes} minutes</div>
                <div className="Clock-seconds">{this.state.seconds} seconds</div>

		</div>
			)
		
	}
}

export default Clock;
