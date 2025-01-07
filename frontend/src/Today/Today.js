import { useState, useEffect } from "react";
import delete_icon from "../images/delete-button-svgrepo-com.svg"
import edit_icon from "../images/edit_button.svg"
import { EditModal } from "../AddTodoModal/AddTodoModal"
import { ApiService } from "../service/ApiService"


export function Today() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeTodoId, setActiveTodoId] = useState()

    const [todos, setTodos] = useState([])
    const [checked, setChecked] = useState([])
    useEffect(() => {
        ; (async () => {
            try {
                const todos = await ApiService("todos/?today=true")
                const checked = []
                todos.forEach(element => {
                    checked.push(element.is_done)
                });
                setTodos(todos)
                setChecked(checked)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])


    const handleDelete = async (todoId) => {
        await ApiService(`todos/${todoId}/`, {
            method: 'DELETE',
            headers: {
            },
        })

        const deletedTodoIdx = todos.findIndex(
            (todo) => todo.id === todoId
        )

        setTodos([
            ...todos.slice(0, deletedTodoIdx),
            ...todos.slice(deletedTodoIdx + 1, todos.length),
        ])
        setChecked([
            ...checked.slice(0, deletedTodoIdx),
            ...checked.slice(deletedTodoIdx + 1, checked.length),
        ])
    }

    async function handleCheckboxChange(todoId, Id) {
        await ApiService(`todos/${todoId}/mark_as_done/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const nextCounters = checked.map((c, i) => {
            if (i === Id) {
                return !c;
            } else {
                return c;
            }
        });
        setChecked(nextCounters);
    }

    const handleEdit = async (text, date) => {
        const updatedTodo = await ApiService(`todos/${activeTodoId}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text,
                due_date: date
            }),
        })

        const updatedTodoIdx = todos.findIndex(
            (Todo) => Todo.id === activeTodoId
        )

        const newTodos = [...todos]
        newTodos[updatedTodoIdx] = updatedTodo

        setTodos(newTodos)

    }

    return (

        <div className="All">
            {isModalOpen && (
                <EditModal onClose={() => setIsModalOpen(false)} todo={todos.find((todo) => todo.id === activeTodoId)} onEdit={handleEdit} />
            )}
            <div className="all_title">Все задачи</div>
            {todos.map((item, i) => (
                <div className="task-item" key={item.id}>
                    { }
                    <input className="checkbox" type="checkbox" onChange={() => handleCheckboxChange(item.id, i)} />
                    {checked[i] === true ?
                        <div className="todo"><strike>{item.text}</strike></div> :
                        <div className="todo">{item.text}</div>
                    }
                    <span className="task-date">{item.due_date}</span>
                    <button
                        onClick={() => {
                            setActiveTodoId(item.id)
                            setIsModalOpen(true)
                        }}
                    >
                        <img src={edit_icon} alt="edit_icon" />
                    </button>
                    <button
                        onClick={() => handleDelete(item.id)}

                    >
                        <img src={delete_icon} alt="delete_icon" />
                    </button>
                </div>
            ))}
        </div >
    );
}       