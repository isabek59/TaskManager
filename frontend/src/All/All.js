import { useState, useEffect } from "react";
import "./All.css"
import delete_icon from "../images/delete-button-svgrepo-com.svg"
import edit_icon from "../images/edit-svgrepo-com.svg"



export function All() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    useEffect(() => {
        ; (async () => {
            try {
                const result = await fetch('http://localhost:3000/todos')
                const todos = await result.json()

                setTodos(todos)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    const handleSumbit = async function (event) {
        event.preventDefault()
        // console.log()
        const response = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: todos.length,
                text: todo,
                date: "06.10.2024"
            }),
        })

        const item = await response.json()

        setTodos([...todos, item])
        setTodo("")
    }

    const handleDelete = async (todoId) => {
        console.log(todoId)
        await fetch(`http://localhost:3000/todos/${todoId}`, {
            method: 'DELETE',
        })


        const deletedTodoIdx = todos.findIndex(
            (todo) => todo.id === todoId
        )

        setTodos([
            ...todos.slice(0, deletedTodoIdx),
            ...todos.slice(deletedTodoIdx + 1, todos.length),
        ])
    }

    return (
        <div className="All">
            <div className="all_title">Все задачи</div>
            {todos.map((item) => (
                <div className="task-item" key={item.id}>
                    <input className="checkbox" type="checkbox" />
                    <div className="todo">{item.text}</div>
                    <span className="task-date">{item.date}</span>
                    <button>
                        <img src={edit_icon} />
                    </button>
                    <button
                        onClick={() => handleDelete(item.id)}

                    >
                        <img src={delete_icon} />
                    </button>
                </div>
            ))}
            <div className="add-task">
                <form onSubmit={handleSumbit}>
                    <input
                        value={todo}
                        onChange={(event) => setTodo(event.target.value)}
                        className="textarea"
                        type="text"
                    />

                    <button type="submit"
                    >+ Добавить задачу</button>
                </form>

            </div>
        </div>
    );
}       