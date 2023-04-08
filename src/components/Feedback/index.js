// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {IsClicked: false}

  changed = () => {
    this.setState(prevState => ({
      IsClicked: !prevState,
    }))
  }

  render() {
    const {resources} = this.props
    const {imageUrl, name} = resources
    return (
      <div className="bg-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance
        </h1>
        <div>
          <button type="button">
            <img
              src={imageUrl}
              alt={name}
              onClick={this.changed}
              key={resources.id}
            />
          </button>
          <p>{resources.name}</p>
        </div>
      </div>
    )
  }
}

export default Feedback
