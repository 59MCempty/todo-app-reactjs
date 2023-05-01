import {useEffect, useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai"
import ListTodos from "./ListTodos";
import {db} from "./firebase";
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore"


const style = {
    background: "h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0] overflow-auto",
    container: "bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4",
    header: "text-3xl font-bold text-center text-gray-800",
    form: "flex justify-between mt-4",
    input: "w-full p-2 text-bold text-xl rounded-lg animate-pulse hover:transition-all",
    submit: "bg-purple-500 text-white p-4 ml-4 rounded-lg"

}

const App = () => {
    const [todos, setTodos] = useState([]);
    const [userInput, setUserInput] = useState("");

    const createInput = async (e) => {
        e.preventDefault()
        if (userInput === "") {
            alert("please enter todo")
            return
        }
        await addDoc(collection(db, 'todos'), {
            completed: false,
            todo: userInput
        })

        setUserInput("")
    }

    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id ))
    }


    useEffect(() => {
        const q = query(collection(db, 'todos'))
        const unsubcribe = onSnapshot(q, (snapshot) => {
            let todoArr = []
            snapshot.forEach((doc) => {

                todoArr.push({...doc.data(), id: doc.id})
            })
            setTodos(todoArr)
            console.log(todos)
        })
        return () => unsubcribe()
    }, [])

    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed,
        });
    };

    return (
        <div>
            <div className={style.background}>
                <div className={style.container}>
                    <h1 className={style.header}>My Todo-App</h1>
                    <form onSubmit={createInput} className={style.form}>
                        <input onChange={(e) => setUserInput(e.target.value)} className={style.input} placeholder="Add Todo" type="text" />
                        <button className={style.submit} type="submit"><AiOutlinePlus size={30} /></button>
                    </form>
                    
                    <ul>
                        {todos.map((todo, idx) => (

                                <ListTodos
                                    todo={todo}
                                    toggleComplete={toggleComplete}
                                    deleteTodo={deleteTodo} />
                        ))}
                    </ul>

                    <div className="mt-2">
                        <h1> You have total: <span className="bg-red-600 text-white font-bold px-2 py-1 rounded-xl animate-ping ">{todos.length}</span> Todos </h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default App;
