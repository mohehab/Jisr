import Button from "./Button"

const Modal = ({setState, file, handleAction}: {setState: Function, file:any, handleAction: Function}) => {

    return (
        <div className="modal">
            <div className="modal-content">
                <span onClick={() => setState(false)}>X</span>
                <h2>Edit File ({ file.name })</h2>
                <Button label="Copy" action={() => handleAction('copy')} background="light" />
                <Button  label="Delete" action={() => handleAction('delete')} background="danger" />
                <Button label="Rename" action={() => handleAction('rename')} background="primary" />
            </div>
        </div>
    )
}
export default Modal