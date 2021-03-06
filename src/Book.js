import React from 'react'
// import PropTypes from 'prop-types'

const Book = (props) => {
    const handleChange = (event) => {
        if (props.book.shelf !== event.target.value) {
            props.changeBookShelf(props.book, event.target.value)
        }

    };

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks && props.book.imageLinks.thumbnail})`}}/>
                <div className="book-shelf-changer">
                    <select value={props.book && props.whichShelf(props.book)} onChange={handleChange}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{props.book.authors}</div>
        </div>
    )
};

export default Book
