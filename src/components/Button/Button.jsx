import './Button.scss'

export function Button({ style, text, handleClick, classModifier }) {
    return (
        <button className={`button button--${style} button--${classModifier}`} onClick={handleClick} >{text}</button>
    )
}