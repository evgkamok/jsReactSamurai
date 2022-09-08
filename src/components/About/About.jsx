import axios from 'axios';
import React from 'react';

// const About = () => {
// 	const sendGetRequest = () => {
// 		axios
// 			.get('https://social-network.samuraijs.com/api/1.0/users')
// 			.then((response) => console.log(response.data));
// 	};
// 	return (
// 		<div>
// 			<div>
// 				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sit esse at in quae
// 				mollitia, dignissimos voluptatibus ab aliquam quidem error tenetur illum delectus iusto. Ex
// 				blanditiis excepturi ipsum corporis.
// 			</div>

// 			<div>
// 				<button onClick={sendGetRequest}>Start</button>
// 			</div>

// 			<div>
// 				<span> WOW </span>
// 			</div>
// 		</div>
// 	);
// };

class About extends React.Component {
	componentDidMount() {
		console.log('DID_MOUNT');
	}
	render() {
		console.log('RENDER');
		return (
			<div>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sit esse at in quae
				mollitia, dignissimos voluptatibus ab aliquam quidem error tenetur illum delectus iusto. Ex
				blanditiis excepturi ipsum corporis.
			</div>
		);
	}
}

export default About;
