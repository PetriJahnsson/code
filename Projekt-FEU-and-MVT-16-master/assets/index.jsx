

(function loadDoc(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      ReactDOM.render(
      	<RegularNews list={JSON.parse(this.responseText)} />, 
      	document.getElementById('regularNews')
      );
    }
  };
  xhttp.open("GET", "https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=a98a06db464045f48cf8ef0262e18858", true);
  xhttp.send();
}());


class RegularNews extends React.Component {
	constructor(props) {super(props);}
	render() {
		let renderer = this.props.list.articles.map((object, key) => {

			if(object.urlToImage) {var imgToCurrentArticle = <img src={object.urlToImage} width="100%" />}
			else {var imgToCurrentArticle = <br/>};

			return(
				<section key={key}>
					<h2>{object.title}</h2>
					<p>{object.description}</p>
					{imgToCurrentArticle}
					<p>{object.author}</p>
					<p>{object.publishedAt}</p>
					<a href={object.url}> Read full article </a>
				</section>
			);
		});
		return(<div>{renderer}</div>);
	}
}


