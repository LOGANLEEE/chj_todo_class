import React from 'react';
import Body from './containers/Body';

import { Wrapper } from './Wrapper';

class App extends React.Component {
	render() {
		return (
			<Wrapper>
				<Body />
			</Wrapper>
		);
	}
}

export default App;
