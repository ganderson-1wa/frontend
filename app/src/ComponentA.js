import React, { Fragment } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		// fetch data from this directory: docs/sample.data.json
		// use axios or async await to fetch data
	}

	render() {
		return (
			<Fragment>
				<h1>Instructions</h1>
					<p>1. Fetch data from directory docs/sample.data.json </p>
					<p>2. Use axios or async await to fetch data </p>
					<p>
						3. Map array from colors object, displaying 4 buttons, one for each
						color.  Use the 'name' for button label and style each button with
						corresponding 'hex' value.{" "}
					</p>
					<p>
						4. Create a click handler to pass props from this component
						(ComponentA) to a second component (ComponentB). Both the color name
						and hex value should be passed to ComponentB and subsequenty style a
						box using the hex value and display the color name.
					</p>
					<p>
						5. The styled box should change color based on the each time the corresponding button
						in ComponentA is clicked.
					</p>
					<p>
						6. Both Components should align horizontally and vertically in the
						center of viewport using Flexbox.
					</p>

					
			</Fragment>
		);
	}
}
