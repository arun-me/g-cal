import React,{Component} from 'react';

class Clock extends Component  {
	constructor(props){
		super(props);
		this.state={
			date: new Date()
		};
	}

	componentDidMount(){
		this.timer=setInterval(()=>{
			this.tick()
		},1000
		);
	}

	componentWillMount(){
		clearInterval(this.timer);
	}

	tick(){
		this.setState({
			date: new Date()
		});
	}
// toLocaleTimeString ===displays only time
// toLocaleDateString===displays only date
// toLocaleString===displays date and time
	render(){
	  return (
	    <div id="Clock">
	    	{this.state.date.toLocaleTimeString()} 
	    </div>
	  );
	}
}

export default Clock;
