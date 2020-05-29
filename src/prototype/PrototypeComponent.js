import React from "react";
import translator from "../services/TranslateService";

class PrototypeComponent extends React.Component {
  state = {
    search: "Hello",
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
          <p>result</p>
        </div>
      </div>
    )
  }

  query(search) {
    translator.languageTranslator.translate({
      text: 'Hello',
      modelId: 'en-fr',
    })
      .then(translationResult => {
        console.log(JSON.stringify(translationResult, null, 2));
      })
      .catch(err => {
        console.log('error:', err);
      });

  }


}




export default PrototypeComponent