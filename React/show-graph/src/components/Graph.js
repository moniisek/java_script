import React from 'react'
import Select from './Select'
import Plot from 'react-plotly.js'

class Graph extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      optionsList: {},
      selectedItem: {value: "selected", optgroup: ""},
      graphResponse: null
    }

    this.handleSelect = this.handleSelect.bind(this);
    this.renderPlot = this.renderPlot.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch("http://localhost:5000/get-list")
       .then(response => response.json())
       .then(data => {
         this.setState({
           optionsList: data,
           isLoading: false
         })
       })
       .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedItem != this.state.selectedItem) {
      fetch("http://localhost:5000/graph", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.selectedItem)
      })
         .then(response => response.json())
         .then(data => {
           this.setState({
             graphResponse: data
           })
         })
         .catch(err => console.log(err))
    }

  }

  handleSelect(e) {
    const optionIndex = e.target.selectedIndex;
    const optionEl = e.target.options[optionIndex];
    const optgroupEl = optionEl.parentElement;
    this.setState({
      selectedItem: {value: optionEl.label, optgroup: optgroupEl.label}
    })



  }

  renderPlot() {
    

    return <Plot
      layout={{title: `${this.state.graphResponse.station} ${this.state.graphResponse.date_time} ${this.state.graphResponse.VV_percent}%`}}
      data={[
        {
          x: this.state.graphResponse.angle_values,
          y: this.state.graphResponse.torque_values,
          type: "scatter",
          mode: "lines"
        },
        {
          x: [this.state.graphResponse.VV_point.x],
          y: [this.state.graphResponse.VV_point.y],
          type: "scatter",
          mode: "markers"
        }
      ]}
    />

  }

  render() {


    return (
      <div>
      {
        this.state.isLoading && <span>loading...</span>
      }
      {!this.state.isLoading &&
        <Select
          data={this.state.optionsList}
          handleSelect={this.handleSelect}
          selectedItem={this.state.selectedItem}
          />
      }
      {this.state.graphResponse && this.renderPlot()}
      </div>
    )
  }


}

export default Graph;
