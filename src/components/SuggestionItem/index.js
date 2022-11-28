// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionName, onClickSuggestion} = props
  const onClickSuggestionButton = () => {
    onClickSuggestion(suggestionName)
  }
  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestionName}</p>
      <button className="arrow-button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="suggestion-arrow"
          onClick={onClickSuggestionButton}
        />
      </button>
    </li>
  )
}

export default SuggestionItem
