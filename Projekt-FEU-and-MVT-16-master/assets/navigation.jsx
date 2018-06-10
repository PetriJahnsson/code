
class Navigation extends React.Component {
	constructor(props) {super(props);}
	render() {
		let meny = this.props.links.map((object, index) => {
			return (<a href={object.url} className='menuItem' key={index}>{object.name}</a>);
		});
		return(<nav>{meny}</nav>);
	}
}




var linkList=[
	{url:'https://ceasarantonio.github.io/Projekt-FEU-and-MVT-16/index.html', name:'News'},
	{url:'https://ceasarantonio.github.io/Projekt-FEU-and-MVT-16/sport.html', name:'Sport'},
	{url:'https://ceasarantonio.github.io/Projekt-FEU-and-MVT-16/noje.html', name:'Entertainment'},
	{url:'https://ceasarantonio.github.io/Projekt-FEU-and-MVT-16/vader.html', name:'Weather'},
	{url:'https://ceasarantonio.github.io/Projekt-FEU-and-MVT-16/discussion.html', name:'Discussion'}
]

ReactDOM.render(<Navigation links={linkList} />, document.getElementById('menu'));