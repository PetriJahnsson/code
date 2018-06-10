

  (function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      ReactDOM.render(<Entertainment list={JSON.parse(this.responseText)} /> ,
        document.getElementById("reactEntertainment")
      );      
    }
  };
  xhttp.open("GET", "https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=651da2453929401d95477408ddb2aab7", true);
  xhttp.send();
}());



class Entertainment extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){
    let oldList = this.props.list.articles;
    console.log(this.props.list.articles)
    let newList = oldList.map((object, key) => {
      if(object.urlToImage){
        return(
          <section key = {key}>
            <h2>{object.title}</h2>
            <p>{object.description}</p>
            <img src={object.urlToImage} width="100%" />
            <p>{object.author}</p>
            <p>{object.publishedAt}</p>
            <a href={object.url}>Read full article</a>
          </section>
        );
      }
    });
    return(
    <div>
      {newList}
    </div>
    );
  }
}

