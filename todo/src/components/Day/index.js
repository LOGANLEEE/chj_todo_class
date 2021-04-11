import React from 'react';
import { Wrapper } from './Wrapper';

class Day extends React.Component {
	render() {
		return (
			<Wrapper>
				<div className='day'>
					{this.props.today.toLocaleDateString('ko-KR', {
						weekday: 'long',
					})}
				</div>
			</Wrapper>
		);
	}
}

export default Day;
