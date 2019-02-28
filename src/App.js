import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

  render(){
    return (
      <div className="App">
        <GeneralInfomation />
      </div>
      
    );
  }
}

class GeneralInfomation extends Component
{

  constructor(props){
    super(props);
    this.state = {
      fullname: '',
      birthday: '',
      address: '',
      email: '',
      phone: ''
    };
  }

  onChangeFullName(event){
    this.setState({
      fullname: event.target.value,
    });
  }

  onChangeBirthday(event){
    this.setState({
      birthday: event.target.value,
    });
  }

  onChangeAddress(event){
    this.setState({
      address: event.target.value,
    });
  }

  onChangeEmail(event){
    this.setState({
      email: event.target.value,
    });
  }

  onChangePhone(event){
    this.setState({
      phone: event.target.value,
    });
  }

  componentDidUpdate() {
    // something here ... 
  }

  render(){
    return(
      <div>
        <h3>Please Enter General Information</h3>
        <span>Your Full Name: </span>
        <input type="text" placeholder={this.state.fullname} onChange={this.onChangeFullName.bind(this)} ref="full-name"/>
        <br/><br/>
        <span>Your BirthDay: </span>
        <input type="text" placeholder={this.state.birthday} onChange={this.onChangeBirthday.bind(this)} ref="birth-of-date"/>
        <br/><br/>
        <span>Your Address: </span>
        <input type="text" placeholder={this.state.address} onChange={this.onChangeAddress.bind(this)} ref="address"/>
        <br/><br/>
        <span>Your Email: </span>
        <input type="text" placeholder={this.state.email} onChange={this.onChangeEmail.bind(this)} ref="email"/>
        <br/><br/>
        <span>Your Phone Number: </span>
        <input type="text" placeholder={this.state.phone} onChange={this.onChangePhone.bind(this)} ref="phone-number"/>
        <p>-------------------------------------------------------------</p>
        <ShowGeneralInformation 
          fullname={this.state.fullname} 
          birthday={this.state.birthday} 
          address={this.state.address} 
          email={this.state.email} 
          phone={+this.state.phone} 
        />
      </div>
    );
  }
}

class ShowGeneralInformation extends Component{
  render(){
    return(
      <div>
        <h3>General Information</h3>
        <span>Full Name: </span>
        <span>{this.props.fullname}</span>
        <br/><br/>
        <span>BirthDay: </span>
        <span>{this.props.birthday}</span>
        <br/><br/>
        <span>Address: </span>
        <span>{this.props.address}</span>
        <br/><br/>
        <span>Email: </span>
        <span>{this.props.email}</span>
        <br/><br/>
        <span>Phone Number: </span>
        <span>{this.props.phone}</span>
      </div>
    );
  }
}

export default App;
