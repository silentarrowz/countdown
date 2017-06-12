import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import StopWatch from './StopWatch';


class App extends Component {
	constructor(){
		super();
		this.state={deadline:'December 25, 2017',newDeadline:'',count:false,minutes:1,newMinutes:''}
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleClick=this.handleClick.bind(this);
		this.handleTimerChange =this.handleTimerChange.bind(this);
		this.handleTimerSubmit=this.handleTimerSubmit.bind(this);

	}
	
	handleChange(event){
		this.setState({newDeadline:event.target.value});
	}
	
	handleSubmit(event){
		event.preventDefault();
		this.setState({ deadline:this.state.newDeadline});
		
	}

	handleTimerChange(event){
			var m=event.target.value;
		this.setState({newMinutes:event.target.value});
		//alert(m);
	}

		handleTimerSubmit(event){
			event.preventDefault();
			var n=this.state.newMinutes;
			this.setState({minutes:this.state.newMinutes});
			//alert(n);
		}

	handleClick(){
		this.setState({count:!this.state.count})
	}

	

	render(){

		var countState=this.state.count;
		var buttonText;
		if(countState){
			buttonText="Click for StopWatch";
		}else{
			buttonText="Click for Countdown"
		}


	   return (
	   	
		<div className="App">
		<button onClick={this.handleClick} >{buttonText}</button> 

		  {countState && 
		  	<div>
		  	<div className="App-title" >Countdown to {this.state.deadline}</div>
                
                <Clock date={this.state.deadline} />

                <form onSubmit={this.handleSubmit}  >
        <input placeholder="new date" value={this.state.value} onChange={this.handleChange} />

                <button >Submit</button>
                </form> 
                </div>
            }

            {!countState &&
            	<div>
             
             	<StopWatch time={this.state.minutes} />
             	<form onSubmit={this.handleTimerSubmit} >
			<label>Enter Minutes Here</label>
			<input type="text" value={this.state.value} onChange={this.handleTimerChange}/>
			<input type="submit" value="Submit" />
			</form>

             	</div>
         }    
                

        </div>

		)
	}


}


export default App;
