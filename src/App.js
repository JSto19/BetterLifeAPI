import React from 'react';
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';
import './App.css';

import ClientInfo from "./components/ClientInfo.js";

// I always check for examples, so I can do it differently on tests and assessments! I don't plagiarize! 
// However, when I'm working for you, I will copy and paste code as needed! LOL I know we have to get work done!
// Here are two tutorial cheats I discovered, the second has a similar setup to my App.js example
// https://tutorial101.blogspot.com/2022/03/reactjs-display-record-in-modal-box.html This has a modal, you'll see I didn't use it!
// Here is Geek For Geeks App.js, I did not use this, I got the same thing from the docs, and this constructor set up with state/props is common!

class App extends React.Component {
	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}
  

	// ComponentDidMount executes the code
	componentDidMount() {
		fetch(
"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					data: json,
					DataLoaded: true
				});
			})
	}

  
  
	render() {
		const { DataLoaded, data } = this.state;
		if (!DataLoaded) return <div>
			<h1> Loading ... </h1> </div> ;

    //Here I render the cards with key/value pairs, and link BetterLife's website to the top.
    //The CSS files are not real detailed as the project said simple app.
    // I tried making the popup a component. And I struggled to get it to render properly. The whole simple app took 2 hours.
		return (
      <div className = "App">
        <a href="https://www.betterlifeins.com/"><h1>  BetterLife API </h1></a> {
          data.map((info) => (
          <div key = { info.id } className="card">
            <div className="card-body">
            <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Future location" />
            <br />
            <br />
              <ul className="info">
                {/* I got data through to name, but struggled to get modal/popup to work */}
                {/* If you switch key={info.name} with <clientInfo />, the issues with modal show up */}
                <button key={ info.name } id="ClientName">Name: { info.name }</button>
                <ClientInfo for="ClientName" />
                <br />
                <li>Email: { info.email }</li>
                <br />
                <li>Phone: { info.phone }</li>
                <br />
              </ul>
            </div>
            </div>
          ))
        }
    </div>
	);
}
}



export default App;