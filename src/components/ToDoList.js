
import React, {useState, useEffect, useRef} from 'react';
// import ToDoList from './todo/ToDoList';

function ToDoList() {
    let [newTodo, setNewTodo] = useState("");
    const [reset, setReset] = useState(0);
    const stop = useRef(false);
    const ulref = useRef();
    const [todo, setTodo] = useState([
        "jlklkj",
        "lkjl",
        "ljklkjlkj",
        "kjljklkj",
    ]);
    const [done, setDone] = useState(new Set());
    function handleInput(e) {
        setNewTodo(e.target.value);
    }

    function handleClick() {
        if (newTodo) {
        setTodo(function (todo) {
            return [...todo, newTodo];
        });
        setNewTodo("");
        }
        console.log(todo);
    }

    function handleDone(index) {
        setDone((done) => new Set([...done, index]));
    }

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    useEffect(() => {
        async function start() {
        if (todo.length > 6) {
            await sleep(5000);
            if (reset > 0) {
            ulref.current.childNodes[0].scrollIntoView({ behavior: "smooth" });
            }
            let index = 5;
            let incrementer = 5;
            let isreset = false;
            while (true) {
            if (stop.current) {
                console.log("Stopped");
                break;
            }
            let x = ulref.current.childNodes[index];
            x.scrollIntoView({ behavior: "smooth" });
            if (index + incrementer >= todo.length && !isreset) {
                incrementer *= -1;
                isreset = true;
            } else if (index + incrementer < 0 && isreset) {
                incrementer *= -1;
                isreset = false;
            }
            await sleep(5000);
            index += incrementer;
            }
        }
        }
        start();
    }, [reset, todo]);

    function createTodoList(todo, done) {
        return todo.map((value, index) => {
        let isStricked = false;
        if (done.has(index)) {
            isStricked = true;
        }
        return (
            <li
            className={"d-flex justify-content-between list-group-item"}
            id={index}
            key={index}
            >
            <span className={`${isStricked ? "striked" : ""}`}>
                {index + 1}. {value}
            </span>
            <button
                onClick={() => handleDone(index)}
                className="btn btn-sm btn-secondary"
            >
                Done
            </button>
            </li>
        );
        });
    }

    return (
        <div className="container-fluid h-100 bg-1 p-3">
        <div className="container">
            <div className="row">
            <div className="col-8 bg-2 list-group-col pt-1">
                <ul
                onMouseEnter={() => (stop.current = true)}
                onMouseLeave={() => {
                    stop.current = false;
                    return setReset((reset) => reset + 1);
                }}
                ref={ulref}
                className="list-group"
                >
                {createTodoList(todo, done)}
                </ul>
            </div>
            <div className="col-4">
                <div className="row">
                <div className="input-group input-group-sm">
                    <input
                    type="text"
                    className="form-control"
                    onChange={handleInput}
                    value={newTodo}
                    />
                </div>
                </div>
                <div className="row mt-2 ">
                <div className="col d-flex justify-content-end">
                    <button onClick={handleClick} className="btn btn-warning">
                    Submit
                    </button>{" "}
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ToDoList;
