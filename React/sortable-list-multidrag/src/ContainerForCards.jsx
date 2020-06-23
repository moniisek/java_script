import React, { useState, useCallback } from 'react'
import Card from "./Card";
import { arrayMove, orderByIndex } from './utils'

/*
ContainerForCards = div container 
state = draggable items
example if we have selected 2 cards
[
  {index: 0, content: [{id: 2, text: "2 Don't mess up my tempo"}]},
  {index: 1, content: [{id: 1, text: "1 Exodus"}, {id: 3, text: "3 Obsession"}]},
  {index: 2, content: [{id: 4, text: "4 Love Me Right"}]}
]

or if none selected:
[
  {index: 0, content: [{id: 1, text: "1 Exodus"}]},
  {index: 1, content: [{id: 2, text: "2 Don't mess up my tempo"}]},
  ...
]
inside of it divs = draggable item

draggable item can be 1 card or more cards 

1. select cards to drag
2. on drag start - add other selected cards into this draggable items' content

*/

class ContainerForCards extends React.Component {
  constructor() {
    super();

    this.state = {
      draggableItems: [
        { index: 0, id: 1, text: "1 Tempo" },
        { index: 1, id: 2, text: "2 Exodus"},
        { index: 2, id: 3, text: "3 Obsession"},
        { index: 3, id: 4, text: "4 Love Me Right"},
        { index: 4, id: 5, text: "5 Damage"},
        { index: 5, id: 6, text: "6 Day After Day"},
        { index: 6, id: 7, text: "7 Oh La La La"}
      ],
      selectedItems: [],
      shiftSelect: null
    }
  }

  handleClick = (e) => {
    if (e.target.id !== 'drag-item') {
      this.setState({ selectedItems: [] });
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick);
  }

  handleSelect = (e, index, id) => {
    const selectedItemsCopy = this.state.selectedItems.map(obj => ({ ...obj }));
    if (e.ctrlKey || e.metaKey) {
      const selectedItem = this.state.draggableItems.find(item => item.id === id);

      //check if selected Item is in selection
      const indexOfSelected = this.state.selectedItems.findIndex(item => item.id === id);

      if (indexOfSelected > -1) {
        selectedItemsCopy.splice(indexOfSelected, 1);
      } else {
        selectedItemsCopy.push(selectedItem);
      }
      this.setState({ selectedItems: selectedItemsCopy });

    } else if (e.shiftKey) {
      const {draggableItems, shiftSelect} = this.state;
      if (shiftSelect === null) {
        this.setState({
          shiftSelect: index,
          selectedItems: [draggableItems.find(item => item.index === index)]
        });        
      } else {
        let lower = shiftSelect;
        let upper = index;

        if (lower > upper) {
          let temp = upper;
          upper = lower;
          lower = temp;
        }
        this.setState({
          selectedItems: draggableItems.filter(item => item.index >= lower && item.index <= upper),
          shiftSelect: null
        });
      }
    } else {
      this.setState({ selectedItems: [] })
    }
  };

  moveDragItem = (dragIndex, hoverIndex) => {
    const draggableItemsNew = this.state.draggableItems.map(dragItem => {
      if (dragItem.index === dragIndex) {
        return {...dragItem, index: hoverIndex}
      } 
      if (dragItem.index === hoverIndex) {
        return {...dragItem, index: dragIndex}
      }
      return {...dragItem}
    });

    this.setState({draggableItems: draggableItemsNew});
  }

  removeOtherSelectedItems = (filteredSelection, dragId) => {
    const {draggableItems, selectedItems} = this.state;
    const ids = filteredSelection.map(item => item.id);
    // remove from selected items those that are in indexes
    const draggableItemsFiltered = draggableItems.filter(item => ids.indexOf(item.id) < 0);
    const draggableItemsNewIndex = draggableItemsFiltered.map((item, i) => ({...item, index: i}));
    this.setState({draggableItems: draggableItemsNewIndex});
    const dragItemNewIndex = draggableItemsNewIndex.findIndex(item => item.id == dragId);
    return dragItemNewIndex;
  }

  insertSelectedItems = (index, parentId) => {
    const filteredItems = [];
    let parentItem;
    this.state.selectedItems.forEach(item => {
      if (item.id === parentId) {
        parentItem = {...item};
      } else {
        filteredItems.push({...item});
      }
    })


    const itemsAbove = [];
    const itemsBelow = [];
    filteredItems.forEach(item => {
      if (item.index > parentItem.index) {
        itemsBelow.push({...item});
      }
      if (item.index < parentItem.index) {
        itemsAbove.push({...item})
      }
    })
    itemsAbove.sort(orderByIndex);
    itemsBelow.sort(orderByIndex);

    const draggableItemsCopy = this.state.draggableItems.map(item => ({...item}));
    if (itemsAbove.length > 0) {
      draggableItemsCopy.splice(index, 0, ...itemsAbove);
    }
    if (itemsBelow.length > 0) {
      const where = draggableItemsCopy.findIndex(item => item.id === parentItem.id);
      draggableItemsCopy.splice(where+1, 0, ...itemsBelow);
    }
    
   
    this.setState({
      draggableItems: draggableItemsCopy.map((item, i) => ({...item, index: i})),
      selectedItems: []
    })
  }



  render() {
    this.state.draggableItems.sort(orderByIndex);
    const ContainerStyle = {
      width: "30%",
      border: "1px solid slateblue",
      padding: "0.2rem 2rem"
    }
    return (
      <div style={ContainerStyle}>
        {this.state.draggableItems.map(dragItem =>
          <Card
            key={dragItem.id}
            index={dragItem.index}
            id={dragItem.id}
            text={dragItem.text}
            handleSelect={this.handleSelect}
            selectedItems={this.state.selectedItems}
            moveDragItem={this.moveDragItem}
            removeOtherSelectedItems={this.removeOtherSelectedItems}
            insertSelectedItems={this.insertSelectedItems}
          />)}
      </div>

    );

  }

}





// const moveCard = useCallback(
//   (dragIndex, hoverIndex, dragId, hoverId) => {
//     const cardsCopy = cards.map(cardObj => {
//       if (cardObj.id === dragId) {
//         return {...cardObj, index: hoverIndex}
//       }
//       if(cardObj.id === hoverId) {
//         return {...cardObj, index: dragIndex}
//       }
//       return {...cardObj}
//     });
//     setCards(cardsCopy);
//   },
//   [cards]
// );             







// React.useEffect(() => {
//   function handleClick(e) {
//       if (e.target.id !== 'drag-container' && e.target.id !== "drag-item") {
//           setSelectedItems([]);
//       }
//   }
//   document.addEventListener("mousedown",handleClick)

//   return function cleanup() {
//       document.removeEventListener("mousedown", handleClick);
//   }
// }, []);

// const removeCards = useCallback((dragId) => {
//   const selectedExceptDragId = selectedCards.filter(cardObj => cardObj.id !== dragId);

//   const filtered = cards.filter(cardObj => selectedExceptDragId.findIndex(selCard => selCard.id !== cardObj.id) > -1);
//   setCards(filtered);
//   console.log(selectedExceptDragId);
// }, [selectedCards, cards]);





export default ContainerForCards;