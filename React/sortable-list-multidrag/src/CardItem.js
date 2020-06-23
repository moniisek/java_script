import React from 'react'


const CardItem = ({parentIndex, id, text, handleSelect, isSelected}) => {
    const handleClick = React.useCallback((e) => {
        handleSelect(e, parentIndex, id);
    }, []);

    const cardStyle = {
        border: "1px dashed gray",
        padding: "0.2rem 1rem",
        marginBottom: ".5rem",
        backgroundColor: isSelected ? "yellow" : "white",
        cursor: "move"
      };


    return (
        <div id="card-item" style={cardStyle} onClick={handleClick}>
            {text}
        </div>
    )

};


export default CardItem;