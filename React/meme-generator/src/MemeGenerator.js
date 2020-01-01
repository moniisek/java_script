import React from 'react'

class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: '',
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.generateRandomImage = this.generateRandomImage.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const {memes} = response.data
      this.setState({allMemeImgs: memes})
    })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  generateRandomImage(event) {
    event.preventDefault()
    // default on submit is to refresh page. and we don't want that
    // that would display the default meme image again
    const randIndex = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randomImage = this.state.allMemeImgs[randIndex].url
    this.setState({
      randomImage: randomImage
    })

  }

  render() {
    return(
      <div>
        <form className="meme-form" onSubmit={this.generateRandomImage}>

          <input
            type="text"
            name="topText"
            placeholder="Top text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
        <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator
