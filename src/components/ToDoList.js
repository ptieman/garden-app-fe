import React from "react";

const ToDoList = ({toDoListData}) => {
    return (
        <div className="to-do-list">
            <h3>To-Do List</h3>
            <p>{toDoListData.task_title}</p>
            <p>{toDoListData.task_description}</p>
        </div>
    );
};

export default ToDoList