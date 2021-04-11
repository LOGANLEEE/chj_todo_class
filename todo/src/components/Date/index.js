import React from 'react';
import { Wrapper } from './Wrapper';

class Date extends React.Component {
	date = this.props.today.toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	render() {
		return (
			<Wrapper>
				<h1>{this.date}</h1>
			</Wrapper>
		);
	}
}

export default Date;
