import * as React from 'react'

interface IButtonProps {
    type?: string
}

const Button: React.SFC<{}> = (props) => {
    return (
        <button>
            {props.children}
        </button>
    )
}

export default Button