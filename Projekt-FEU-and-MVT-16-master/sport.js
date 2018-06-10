
function getTheData(sportData) {
    fetch("https://newsapi.org/v1/articles?source=talksport&sortBy=top&apiKey=3c28b6d633ce4a0d86aa0e238453b4cf")
            .then(function(response){return response.json()})
                .then(function(json){
                    let data = json.articles;
                    sportData(data);
                    
    });
}
    
 
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            sportNews: [] 
        };
        this.sportData = this.sportData.bind(this);
    };
    componentDidMount() {
        getTheData(this.sportData);
    };
    sportData(data) {
        this.setState({
            sportNews: data
        });
    }
    render() {
        let k = 0;
        let newslist =  this.state.sportNews;
        const newNews = newslist.map( x => <Artikel key={k++} title={x.title} description={x.description} urlToImage={x.urlToImage} author={x.author} publishedAt={x.publishedAt} url={x.url}/>);
        return (
            <div>
                {newNews}
            </div>
        );
    }
}
class Artikel extends React.Component {   
    render () {
            return (
                <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.urlToImage} width="100%"/>
                <p>{this.props.description}</p>
                <a href={this.props.url}>Read full article</a>
                <p>By: {this.props.author} || {this.props.publishedAt}</p>
                </div>
    )
}}
ReactDOM.render(
    <App></App>,
    document.getElementById('content')
)
