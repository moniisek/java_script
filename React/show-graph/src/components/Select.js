import React from 'react'

class Select extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <select value={this.props.selectedItem.value} onChange={this.props.handleSelect}>
          <option value="select">Select</option>
          {Object.keys(this.props.data).map(name => {
            return (
              <optgroup key={name} label={`${name}`}>
              {
                this.props.data[name].map(item => {
                  let style = {}
                  if (item == this.props.selectedItem.value) {
                    style = {color: "red"}
                
                  }
                  return <option style={style} key={item} value={item}>{item}</option>
                })
              }
              </optgroup>
            )
          })}
        </select>
      </div>

    )
  }
}

export default Select;
