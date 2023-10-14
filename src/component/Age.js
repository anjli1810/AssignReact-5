import { Component } from 'react';

export class Age extends Component{
    
    constructor() {
        super();
        this.state = {
          x: 0,
          dob:''
        };
      }
    
      handleChange = (event) => {
        this.setState({ dob: event.target.value });
      }
    
      calculateAge = () => {
        const { dob } = this.state;
    
        if (dob) {
          const dobDate = new Date(dob);
          const currentDate = new Date();
          const age = currentDate.getFullYear() - dobDate.getFullYear();
          this.setState({ x: age });
        }
      }
      render() {
        return (
          <div>
            <h2>Age Calculator</h2>
            <h3>Enter your date of birth</h3>
            <input
              type="date"
              id="bd"
              name="trip-start"
              value={this.state.dob}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button onClick={this.calculateAge}>Calculate Age</button>

            {this.state.x > 0 && (
              <h2>You are {this.state.x} years old</h2>
            )}

          </div>
        );
      }

}