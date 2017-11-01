import React from 'react'
const Avatar = (props) => (
    <div>
        <img src={props.url} alt="avatar missing"/>
    </div>
)

Avatar.defaultProps = {
    url: ''
}

export default Avatar

