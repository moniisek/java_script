import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import ItemTypes from "./ItemTypes";
import { orderByIndex } from './utils'
import CardItem from './CardItem'



const dragContainerStyle = {
  border: "1px solid black",
  padding: "2px",
  cursor: "move",
  marginBottom: "5px",
  width: "50%"
}


const Card = ({index, id, text, handleSelect, selectedItems, moveDragItem, removeOtherSelectedItems, insertSelectedItems }) => {
  const ref = useRef(null); 

  const [{isDragging}, drag] = useDrag({
    item: {type: 'single', index, id},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    begin: monitor => {
      
      if (selectedItems.findIndex(itemObj => itemObj.id === id) > -1) {
      //   // if dragging a selected item
      //   const otherIndexes = selectedItems.filter(card => card.index !== index).map(card => card.index);
      //  removeOtherSelectedItems(otherIndexes);

        return {type: "list", index, id, selectedItems}
      }
    },
    end: monitor => {
      insertSelectedItems(index, id);
    }
  })

  const [, drop] = useDrop({
    accept: ['single', 'list'],
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      let dragIndex = item.index;
      const hoverIndex = index;

      if (item.type === 'list') {
        // dragId === hoverId and dragged item is among selected items
          if (item.id === id && selectedItems.length > 0) {            
            const filteredSelection = selectedItems.filter(card => card.id !== id);
            const newDragIndex = removeOtherSelectedItems(filteredSelection, item.id);
            item.index = newDragIndex;
            dragIndex = newDragIndex;
          }
      } else {
         // don't replace containers with themselves
      if (dragIndex === hoverIndex){
        return;
        }
      }    
      

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      
      moveDragItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
      
    }
  })

  const handleClick = React.useCallback(e => {
    handleSelect(e, index, id);
  })


  

// the drag-container will be drag drop object
drag(drop(ref));
const isSelected = selectedItems.findIndex(selC => selC.id === id) > -1;
const cardStyle = {
  border: "1px dashed gray",
  padding: "0.2rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: isSelected && !isDragging ? "yellow" : "white",
  cursor: "move",
  opacity: isDragging ? "0.5" : "1"
};

if (id == 2) {
  cardStyle.paddingBottom = "50px"
}

  return (
    <div id="drag-item" ref={ref} style={cardStyle} onClick={handleClick}>
      {
        text
      }
    </div>
  );
};
export default Card;
