import React from "react";
import translator from "../services/TranslateService";
import translateService from "../services/TranslateService";


class PrototypeComponent extends React.Component {
  state = {
    search: "Hello",
    result: ""
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
              () => this.doQuery(this.state.search)}>
            Translate
        </button>
          <p>{this.state.result}</p>
        </div>
      </div>
    )
  }

  doQuery(search) {
    const text = translateService.translateFrench(search)
      .then(res => {
        const text = res.responseData.translatedText
        console.log(text)
        this.setState({result: text})
      })
    return text
    
  }
}




export default PrototypeComponent