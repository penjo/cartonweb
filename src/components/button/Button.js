import React from 'react'
import "./Button.css"

const STYLES =[
    'btn-primary',
    'btn-outline'
]
const SIZES = [
    'btn-medium',
    'btn-large'

]

export const Button =({
    children,
    tpye,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const CheckButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle:STYLES[0]

    const CheckButtonSize = SIZES.includes(buttonSize) ? buttonSize:STYLES[0]

    return (
        <button className={'btn ${CheckButtonStyle} ${CheckButtonSize}'} 
        onClick={onClick}
        type={type}>
            {children}
        </button>
    )
}