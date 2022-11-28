// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    currentInputValue: '',
  }

  onClickSuggestion = suggestion => {
    this.setState({currentInputValue: suggestion})
  }

  onChangeSearchItem = event => {
    this.setState({currentInputValue: event.target.value})
  }

  render() {
    const {currentInputValue} = this.state
    const {suggestionsList} = this.props
    const updatedList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(currentInputValue.toLowerCase()),
    )
    console.log(currentInputValue)
    return (
      <div className="bg-container">
        <div className="google-search-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-container">
            <div className="input-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input-element"
                value={currentInputValue}
                placeholder="Search Google"
                onChange={this.onChangeSearchItem}
              />
            </div>
            <ul className="search-suggestion-container">
              {updatedList.map(eachSuggestion => (
                <SuggestionItem
                  suggestionName={eachSuggestion.suggestion}
                  key={eachSuggestion.id}
                  onClickSuggestion={this.onClickSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
