class Grid extends React.Component {
	constructor( props ) {
		super( props )
		this.state = {
			value: null,
		}
	}
	render() {
		return (
			<button className="square" onClick={ () => this.setState( { value: "X" } ) }>
				{this.state.value}
			</button>
		)
	}
}

class Cell extends React.Component {
	constructor( props ) {
		super( props )
		this.state = {
			value: null,
		}
	}
	render() {
		return (
			<button className="square" onClick={ () => this.setState( { value: "X" } ) }>
				{this.state.value}
			</button>
		)
	}
}
