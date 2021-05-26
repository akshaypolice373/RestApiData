import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items : []
    }
  }
  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2")
    .then((res) => {
      
      this.setState({
        items: res.data.data
      })
      console.log(this.state.items)
    });
  }

  render() {
    return(
      <div>
        <h1 className="header">Users List</h1>
        <div className="row">
          <table className="table table-striped">
            <tbody>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>EmailId</th>
              </tr>
            </tbody>
            <tbody>
              { this.state.items.map(
                  items =>
                    <tr key="items.id">
                      <td>{items.id}</td>
                      <td>{items.first_name}</td>
                      <td>{items.last_name}</td>
                      <td>{items.email}</td>
                    </tr>                  
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App
