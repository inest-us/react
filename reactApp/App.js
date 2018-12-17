import React, { Component } from 'react';
class App extends Component{
   render(){
      return(
         <div>
            <h1>Header</h1>
            <h2>Content</h2>
            <p data-myattribute="somevalue">This is the content!!!</p>
         </div>
      );
   }
}
export default App;