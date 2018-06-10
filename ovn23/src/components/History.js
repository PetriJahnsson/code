import React from 'react';

function History(props) {
	console.log('history:', props.history);
	const list = props.history.map( (x, index) => <li key={index}>{x.type}</li> );
	return <div>History: <ul>{list}</ul></div>;
}

export default History;