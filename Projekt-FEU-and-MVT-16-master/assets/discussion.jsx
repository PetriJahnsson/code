
/* OBSOLETE? */

/*
const auth = firebase.auth();
let getID = id => document.getElementById(id);

class DiscussionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages:'', messageAmount:null, user:null,}
    this.sendNewMessage = this.sendNewMessage.bind(this);
    this.completeAuthentication = this.completeAuthentication.bind(this);
    const self = this;}
  componentDidMount() {
    const root = firebase.database().ref();
    firebase.database().ref('messages').on('value', snap => {
      let list = snap.val();
      console.log(list)
      if(list != null) {
        let msgs = list.map((object, key) => {
          return(
            <li key={key}>{object.name}: {object.message}</li>
          );})
        self.setState({messages:msgs})
        self.setState({messageAmount:list.length})}});}
  completeAuthentication() {
    console.log(name)
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
      let newName = result.user.displayName;
      console.log(newName)
      self.setState({name:newName});
      self.setState({loggedIn:true})})
    .catch(function(error) {
      console.error(error)});}
  bypassLogin() {
    self.setState({name:'Michael'});
    self.setState({loggedIn:true})}
  sendNewMessage(object) {
    console.log(object)
    firebase.database().ref('messages/' + self.state.messageAmount).set({name:self.state.name, message:object.message, time:object.time});}
  render() {
    return(
      <div>
        {this.state.messages}
        {(this.state.loggedIn)
          ? <InputForm newMessage={this.sendNewMessage}  />
          : <AuthForm bypassLogin={this.bypassLogin} completeAuthentication={this.completeAuthentication} />}
      </div>);}}

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.constructMessage = this.constructMessage.bind(this);}
  constructMessage(event) {
    event.preventDefault();
    // Get value
    let inputMessage = event.target.querySelector('#inputMessage'); 
    // Get Time
    let date = new Date(); let timeString = date.toLocaleTimeString();
    // Create message object
    let newObject = {message:(inputMessage.value), time:timeString};
    // Call list updater
    this.props.newMessage(newObject);
    // Clear input
    inputMessage.value = '';}
  render() {
    return(
      <form onSubmit={this.constructMessage} >
        <h2>Add new</h2>
        <input type="text" id="inputMessage" placeholder="Message" />
        <input type="submit" />
      </form>);}}

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginEvent = this.handleLoginEvent.bind(this);}
  handleLoginEvent(event) {
    event.preventDefault();
    this.props.completeAuthentication();}
  render() {
    return(
      <div>
        <h3>Log in to post:</h3>
        <form onSubmit={this.handleLoginEvent}>
          <button type="submit">Log in with Google</button>
          <button onClick={this.props.bypassLogin}>Bypass login</button>
        </form>
      </div>);}}


ReactDOM.render(<DiscussionApp />, getID('discussion'));


*/
