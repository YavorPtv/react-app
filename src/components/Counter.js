import { useState } from 'react';

function ClickCounter() {
	const [counter, addToCounter] = useState(0);

	return (
		<>
			<h1>You clicked this button {counter} times</h1>
			<button type="button" onClick={() => addToCounter(counter + 1)}>
				Click
			</button>
            <br />
		</>
	);
}

export default ClickCounter;
