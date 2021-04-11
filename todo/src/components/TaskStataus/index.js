import React from 'react';
import { Wrapper } from './Wrapper';

class TaskStataus extends React.Component {
	render() {
		const { todos } = this.props;
		const incomplete = todos.filter((content) => !content.done).length;
		return (
			<Wrapper>
				<div className='tasks-left'>
					미완료 테스크 : {incomplete} 개 , 완료 테스크 :{todos.length - incomplete} 개
				</div>
			</Wrapper>
		);
	}
}

export default TaskStataus;
