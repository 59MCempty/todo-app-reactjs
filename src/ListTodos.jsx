import React from 'react';
import { FaRegTrashAlt} from "react-icons/fa";

const style = {
    li: "my-4 px-3 flex justify-between bg-slate-300 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300",
    liComplete: "my-4 px-3 flex justify-between bg-slate-500 rounded-lg",
    row: "flex p-3 gap-3 text-xl ",
    text: "cursor-pointer capitalize",
    textComplete: "line-through cursor-pointer capitalize",
    trashbutton: "mt-5 cursor-pointer"
}

const ListTodos = ({ todo, toggleComplete, deleteTodo}) => {
    return (
        <li className={todo.completed ? style.liComplete : style.li } >
            <div className={style.row}>
                <input onChange={() => toggleComplete(todo)} type="checkbox" checked={todo.completed ? "checked" : ""} />
                <p onClick={()=> toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.todo} </p>
            </div>
            <div onClick={() => deleteTodo(todo.id)} className={style.trashbutton}> <FaRegTrashAlt /> </div>
        </li>
    );
};

export default ListTodos;
