import React from 'react';
import Add from '../../components/Add';
import Today from '../../components/Date';
import Day from '../../components/Day';
import List from '../../components/List';
import TaskStataus from '../../components/TaskStataus';

import { Wrapper } from './Wrapper';

/* Conainer = 상태를 관리할 수 있는 컴포넌트
컴포넌트를 담을 수 있는 그릇.
*/

const today = new Date();
class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{
					id: 1,
					text: 'React 공부',
					done: true,
				},
				{
					id: 2,
					text: 'Component 이해',
					done: true,
				},
				{
					id: 3,
					text: 'Class 변형',
					done: false,
				},
				{
					id: 4,
					text: '기능 추가',
					done: false,
				},
			],
		};
	}

	toggle = (id) =>
		this.setState({
			todos: this.state.todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
		});
	remove = (id) => this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });

	add = (todo) =>
		this.setState({
			todos: this.state.todos.concat(todo),
		});

	render() {
		return (
			<Wrapper>
				<Today today={today} />
				<br />
				<Day today={today} />
				<br />
				<TaskStataus todos={this.state.todos} />
				<br />
				<div className='list'>
					<List todos={this.state.todos} toggle={this.toggle} remove={this.remove} />
				</div>
				<br />
				<Add add={this.add} todos={this.state.todos} />
				<br />
			</Wrapper>
		);
	}
}
export default Body;
