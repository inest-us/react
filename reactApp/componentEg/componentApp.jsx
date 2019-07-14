import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Header from props...",
         content: "Content from props...",
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ],
         data2: [],
         data3: 0
      };
      this.setStateHandler = this.setStateHandler.bind(this);
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
      this.setNewNumber = this.setNewNumber.bind(this);
   }

   setStateHandler() {
      var item = 'setState...';
      var myArray = this.state.data2.slice();
      myArray.push(item);
      this.setState({data2: myArray});
   }

   forceUpdateHandler() {
      this.forceUpdate();
   }

   findDomNodeHandler() {
      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
   }

   setNewNumber() {
      this.setState({data3 : this.state.data3 + 1})
   }
   render() {
      return (
         <div>
            <Header headerProp={this.state.header} />
            <h3>Array: {this.props.propArray}</h3>
            <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
            <div>
               <button onClick = {this.setStateHandler}>SET STATE</button>
               <h4>State Array: {this.state.data2}</h4>
            </div>
            <div>
               <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
               <h4>Random number: {Math.random()}</h4>
            </div>
            <div>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
               <div id = "myDiv">NODE</div>
            </div>
            <div>
               <button onClick = {this.setNewNumber}>INCREMENT</button>
               <Content myNumber = {this.state.data3}></Content>
            </div>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>{this.props.headerProp}</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

App.propTypes = {
   propArray: PropTypes.array.isRequired,
   propBool: PropTypes.bool.isRequired,
   propFunc: PropTypes.func,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
   propObject: PropTypes.object
}

App.defaultProps = {
   headerProp: "Header from props...",
   contentProp: "Content from props...",
   propArray: [1, 2, 3, 4, 5],
   propBool: true,
   propFunc: function(e) {
      return e;
   },
   propNumber: 1,
   propString: 'String value...',
   propObject: {
      name: 'value'
   }
}
export default App;