import React, { Component } from 'react';
import './App.css';
const url = `https://cors-anywhere.herokuapp.com/https://fcctop100.herokuapp.com/api/fccusers/top/alltime`;
class App extends Component {
	constructor(props) {
		super(props)
		const ref = this;
		ref.state = {
			camperData: []
		}
	}
	componentWillMount() {
		const ref = this;
		fetch(url)
		.then(d => d.json())
		.then(d => {
			ref.setState({
				camperData: d
			})
		})
	}
    render() {
    	const ref = this;
    	return (
            <div className="App">
            	<div className="titleSection">
            		<div className="siteName">freeCodeCamp</div>
            		<div className="title">Camper Leaderboard</div>
            	</div>
                <table className="camperData">
                	{
                		ref.state.camperData.slice(0, 5).map((el, i) => {
                			return (
                				<tr>
                					<td>{i}</td>
                					<td>
                						<img src={el.img} width="20px"/>
                					</td>
                					<td>{el.username}</td>
                					<td>{el.recent}</td>
                				</tr>
                			)
                		})
                	}
                </table>
                <div className="footer">by <strong>Jobayer Ahmed Mickey</strong></div>
            </div>
        );
    }
}

export default App;