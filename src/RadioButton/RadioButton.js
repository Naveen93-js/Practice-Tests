import React from "react"

const RadioButton = ({ handleChange, selectedBtn }) => {


    return (
        <>
            <input type="radio" name="details" id="user" value="user" checked={selectedBtn === "user"} onChange={handleChange} />
            <label for="user">Users</label>
            <input type="radio" name="details" id="title" value="title" checked={selectedBtn === "title"} onChange={handleChange} />
            <label for="title">Title</label>
        </>

    )
}
export default RadioButton