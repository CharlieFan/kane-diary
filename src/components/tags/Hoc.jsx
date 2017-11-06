import React from 'react'

const generalComponent = (IncomingCompoment) => {
    return (props) => (
        <div>
            <IncomingCompoment {...props} /> 
        </div>
    )
}

export default generalComponent