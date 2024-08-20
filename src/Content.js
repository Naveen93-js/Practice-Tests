import React from "react"

const Content = ({ content }) => {
    return (
        <ul>
            {content.length > 0 && content.map((item) =>
                <li>{item.title ? item.title : item.username}</li>
            )}

        </ul>


    )
}
export default Content