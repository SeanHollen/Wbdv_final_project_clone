import React from "react";

class PrototypeComponent extends React.Component {
  state = {
    search: "",
  }
  render() {
    return (
      <div className="container">
        <div className="center">
          <h2>English to French Translator</h2>
          <input className="" type="text"
            onChange={(event) => this.setState({
              search: event.target.value
            })}></input>
          <button 
          onClick={
            () => this.query(this.state.search)}>
            Add Course
        </button>
        </div>
      </div>
    )
  }
  query(search) {
    console.log(search); 
  }
}



export default PrototypeComponent