//App.js last write commant read
import React from 'react';
import DisplayData from './DisplayData';  // Import the class component
import Greeting from './Greeting';
import WelcomeMessage from './WelcomeMessage'
class App extends React.Component {
  render() {
    // Define the props to pass to the DisplayData component
    const name = "Alice";
    const items = ["Apple", "Banana", "Cherry"];
    const user = {
      name: "Alice Smith",
      age: 30,
      location: "New York"
    };

    return (
      <div>
        <DisplayData name={name} items={items} user={user} />
        <Greeting name="Alice" />
        <Greeting name="Bob" />
        <Greeting name="Charlie" />
        <WelcomeMessage />
      </div>
    );
  }
}

export default App;
// class and funation commponent using with file 
//class string array object and value pass other class
// funation using props data or value pass other funation