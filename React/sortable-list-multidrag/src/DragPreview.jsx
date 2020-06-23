import React from 'react'
import { useDragLayer } from 'react-dnd';
import ItemTypes from './ItemTypes'

const layerWrapStyle = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
};

const getPreviewStyle = (currentOffset, isDragging) => {
    if (!currentOffset) {
        return {
            display: "none"
        }
    }

    return {
        opacity: 1,
        transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
    }
};

function renderItemBelow(item, itemType, isDragging) {
    const itemStyle = {
        border: "1px dashed red",
        padding: "0.2rem 1rem",
        marginBottom: ".5rem",
        backgroundColor: "white",
        opcaity: 1
        // opacity: isDragging ? 0.2 : 0
    };

    if (itemType === ItemTypes.CARD) {
        return (
            <div style={itemStyle}>
            {item.text}            
        </div>)
        
    }

    if (itemType === ItemTypes.cardsList) {        
        return item.list.map(card => <div style={itemStyle}>card.text</div>)
    }

    

}

const DragPreview = () => {
    const {
        item,
        itemType,
        isDragging,
        currentOffset
    } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        isDragging: monitor.isDragging(),
        currentOffset: monitor.getSourceClientOffset()
    }))

    if (!isDragging) {
        return null;
    }
    

    return (
        <div style={layerWrapStyle}>
            <div style={getPreviewStyle(currentOffset)}>
                <div style={{width: "100px", opacity: isDragging ? 0.8 : 1}}>
                {renderItemBelow(item, itemType, isDragging)}
                </div>
            </div>
        </div>
    )
};

export default DragPreview;