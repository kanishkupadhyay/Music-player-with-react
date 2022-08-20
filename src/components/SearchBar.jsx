import { React, useState } from 'react';

export default function SearchBar(props) {
    const [inputValue, setInputValue] = useState(props.inputValue)
    const hanldeSearchButtonClick = (event) => {
        event.preventDefault();
        props.onSearchButtonClick(inputValue)
    }
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <>
            <form className="d-flex" onSubmit={hanldeSearchButtonClick}>
                <div className="search-container p-2">
                    <input value={inputValue} onChange={handleInputChange} className="search-txt p-0" type="text" name="" placeholder={props.placeholder} />
                    <button className="search-btn d-flex justify-content-center align-items-center" href="#" >
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </form>
        </>
    )
}
SearchBar.defaultProps = {
    inputValue: ''
}