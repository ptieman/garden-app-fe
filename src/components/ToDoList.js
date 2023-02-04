import React, {useEffect, useState}  from "react";

const ToDoList = () => {
    const [toDoListData, setToDoListData] = useState({})
    useEffect(() => {
        const exampleToDoList = {
            task_title: "First Task",
            task_description: "Do this first"
        };
        setToDoListData(exampleToDoList);
    }, []);
    
    return (
        <div className="to-do-list">
            <h3>To-Do List</h3>
            <p>{toDoListData.task_title}</p>
            <p>{toDoListData.task_description}</p>
        </div>
    );
};

export default ToDoList