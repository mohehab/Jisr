type buttonType = {
    label: string,
    background: 'danger' | 'primary' | 'light',
    action: React.MouseEventHandler<HTMLButtonElement>
}


const Button = ({label, background, action}: buttonType) => {
    return (
        <button className={background} onClick={action}>
            {label}
        </button>
    )
}

export default Button