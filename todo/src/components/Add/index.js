import React from 'react';
import { Wrapper, Input, InsertForm, InsertFormPositioner, CircleButton } from './Wrapper';
import { MdAdd } from 'react-icons/md';

class Add extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			inputText: '',
		};
	}
	render() {
		const { add, todos } = this.props;
		const { open, inputText } = this.state;

		return (
			<Wrapper>
				{open && (
					<InsertFormPositioner>
						<InsertForm
							onSubmit={(e) => {
								e.preventDefault();
								add({
									id: todos.length + 1,
									text: inputText,
									done: false,
								});
								this.setState({
									inputText: '',
								});
							}}>
							<Input
								autoFocus
								placeholder='Typing And, Enter!'
								onChange={({ target }) =>
									this.setState({
										inputText: target.value,
									})
								}
								value={inputText}
							/>
						</InsertForm>
					</InsertFormPositioner>
				)}
				<CircleButton onClick={() => this.setState({ open: !open })} open={open}>
					<MdAdd />
				</CircleButton>
			</Wrapper>
		);
	}
}
export default Add;
