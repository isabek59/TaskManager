import { useState } from 'react'
// import './EditTodoModal.css'

export const AddModal = (props) => {
    const {
        onClose,
        // todo,
        onEdit
        // modalData: { todo, onEdit },
    } = props
    const [text, setText] = useState("")
    const [date, setDate] = useState("")

    const handleClick = () => {
        onClose()
    }

    const handleSave = () => {
        onEdit(text, date)
        onClose()
    }

    return (
        <div className="modal-wrapper" onClick={handleClick}>
            <div className="modal-inner" onClick={(event) => event.stopPropagation()}>
                <div className="todo-form-wrapper">
                    <div className="todo-form">
                        <h3 className='text_form'>Добавьте задачу</h3>
                        <textarea
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                            className="textarea"
                            name="text"
                        ></textarea>
                        <textarea
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                            className="textarea"
                            name="text"
                        ></textarea>
                        <button
                            type="submit"
                            onClick={handleSave}
                            className="submit-button"
                        >
                            Сохранить
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}
