import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import ComponentA from "./ComponentA";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
		};
	}

	componentDidMount() {

		this.setState({ loading: false });
		
	}

	render() {

		let {loading} = this.state;

		return (
			<Fragment>
					{loading ? (
						<div className="load"></div>
					) : (
						<Fragment>
							<Router>
								<Switch>
									<Route
										exact
										path="/"
										render={(props) => (
											<Fragment>
												<ComponentA {...props} />
											</Fragment>
										)}
									/>
								</Switch>
							</Router>
						</Fragment>
					)}
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
