import React,{Component} from 'react';

class StopWatch extends Component{
		constructor(props){
			super(props);
			this.state={minutes:1,seconds:0}
			this.getTimeUntil = this.getTimeUntil.bind(this);
			
		}
			componentDidMount(){
			var timez=this.props.time*60;
			setInterval(()=>timez=timez-1,1000);

			if(timez>0){
				console.log('timez is : ',timez);
				setInterval(()=>this.getTimeUntil(timez),1000);
			}
		
			
		    }


		componentWillReceiveProps(newProps){
			this.getTimeUntil(newProps.time);
			
		}

		getTimeUntil(time){
			if(time>=0){
				var minutesTimer=Math.floor(time/60);
			var seconds_left=time-(minutesTimer*60);
			
			console.log('minutes is ',minutesTimer);
			console.log('seconds is ',seconds_left);
			this.setState({minutes:minutesTimer,seconds:seconds_left})
			}
			
			console.log('minutes is ',minutesTimer);
			console.log('seconds is ',seconds_left);
		}

		leading0(num){
			if(num<10){
				return '0'+num;
			}

			return num;
		}

	render(){
		return(
			<div>
			<h1>STOP WATCH</h1>
             	<h1>Minutes Remaining: <br/>{this.state.minutes}:{this.leading0(this.state.seconds)}</h1>
			
			</div>

			)
	}
}

export default StopWatch;
