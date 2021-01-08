import React, { useState } from 'react'

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <article>
            <img src={image} alt={name} />
            <footer>
                <div>
                    <h4>{name}</h4>
                    <h4>#{price}</h4>
                </div>
                <p>{readMore ? info : `${info.substring(0, 150)}...` }
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                        </button>
                </p>
                <button onClick={() => {
                    removeTour(id)
                }}>not interested</button>
            </footer>
            <h2>tour component</h2>
        </article>
    )
}

export default Tour
