import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import List from 'react-bootstrap/List'


const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get("http://localhost:8000/tasks/");
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleAddTask = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8000/tasks/", {
      task_title: taskTitle,
    });

    setTasks([...tasks, response.data]);
    setTaskTitle("");
  };

  const handleDeleteTask = async (id) => {
    await axios.delete(`http://localhost:8000/tasks/${id}/`);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <Row>
    <Col style={{marginLeft: '200px'}}>
      <h3>To-Do List</h3>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskTitle}
          onChange={handleTaskTitleChange}
        />
        <button class="btn btn-secondary" type="submit">Add Task</button>
      </form>
      <Card class="card border-primary mb-3" style={{width: '300px'}}>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task_title}{" "}
            <button class="btn btn-outline-success" onClick={() => handleDeleteTask(task.id)}>Done</button>
          </li>
        ))}
      </Card>
    </Col>
    <Col>
    <h3> Supplies List</h3>
    <form >
        <input
          type="text"
        />
        <button class="btn btn-secondary" type="submit">Add Supply</button>
      </form>
      <Card class="card border-primary mb-3" style={{width: '300px'}}>
        <Card.Header> Supplies List Here</Card.Header>
        <Card.Body>Supplies go here</Card.Body>
      </Card>
    </Col>
    </Row>
    </Container>
  );
};

export default ToDoList;


// const TableList = () => {
//     const [tasks, setTasks] = useState([]);
//     const [task, setTask] = useState({task_title: ''});
  
//     useEffect(() => {
//       axios
//         .get("http://localhost:8000/tasks/")
//         .then((res) => {
//           console.log(res.data);
//           setTasks(res.data.tasks);
//         })
//         .catch((err) => console.error(err));
//     }, []);
    
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       axios
//         .post("http://localhost:8000/tasks/", { task_title: task.task_title })
//         .then((res) => {
//           console.log(res.data);
//           setTasks([...tasks, { task_title: task.task_title }]);
//           setTask({ task_title: '' });
//         })
//         .catch((err) => console.error(err));
//     };


//     const handleDelete = (id) => {
//       console.log("Deleting task with id:", id);
//       axios
//         .delete(`http://localhost:8000/tasks/${id}`)
//         .then((res) => {
//           console.log(res.data);

//           setTasks(tasks.filter(task => task.id !== id));
//         })
//         .catch((err) => console.error(err));
//     };

  //   const handleDelete =  id => {
      
  //     axios.delete(`http://localhost:8000/tasks/${id}/`)
  //     .then(() => {
  //       setTasks(tasks.filter(task => task.id !== id));
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  //       console.log(task.id)
  
//     return (
//       <div>
//         <table>
//             <Card>
//           <thead>
//             <tr>
//               <th>Task Title</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.map((task) => (
//               <tr key={task.task_title}>
//                 <td>{task.task_title}</td>
//                 <button class="btn btn-outline-secondary" type="submit" onClick={() => handleDelete(task.id)}>Delete Task</button>
//               </tr>
//             ))}
//           </tbody>
//           </Card>
//         </table>
//         <form onSubmit={handleSubmit}>
//         <input
//   type="text"
//   onChange={(e) => setTask({ task_title: e.target.value })}
//   value={task.task_title}
// />
//           <button type="submit" class="btn btn-secondary">Add Task</button>
//           {/* <button type="submit">Delete Task</button> */}
//         </form>
//       </div>
//     );
//   };

        
// const TodoList = () => {
    
//     return (
//         <Container>
//             <TableList></TableList>
//         </Container>
//     );
//                 }

// export default TodoList

//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState({task_title: ""});

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get('http://localhost:8000/tasks/');
//       setTodos(result.data);
//     };

//     fetchData();
//   }, []);

//   const handleChange = event => {
//     setNewTodo(event.target.value);
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     if (newTodo) {
//       const result = await axios.post('http://localhost:8000/tasks/', {
//         task: newTodo
//       });
//       setTodos([...todos, result.data]);
//       setNewTodo('');
//     }
//   };

//   const handleDone = async id => {
//     const result = await axios.put(`http://localhost:8000/tasks/${id}/`, {
//       done: true
//     });
//     setTodos(
//       todos.map(todo => (todo.id === id ? result.data : todo))
//     );
//   };

//   const handleDelete = async id => {
//     await axios.delete(`http://localhost:8000/tasks/${id}/`);
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={newTodo} onChange={handleChange} />
//         <button type="submit">Add Task</button>
//       </form>
//       <ul>
//         <Card>
//         {todos.map(todo => (
//           <li key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
//             {todo.task}
//             <button onClick={() => handleDone(todo.id)}>Done</button>
//             <button onClick={() => handleDelete(todo.id)}>Delete</button>
//           </li>
          
//         ))}
//         </Card>
//       </ul>
//     </div>
//   );
// };

// export default TodoList;







// import React, {useState, useEffect, useRef} from 'react';
// // import ToDoList from './todo/ToDoList';

// function ToDoList() {
//     let [newTodo, setNewTodo] = useState("");
//     const [reset, setReset] = useState(0);
//     const stop = useRef(false);
//     const ulref = useRef();
//     const [todo, setTodo] = useState([
//         "jlklkj",
//         "lkjl",
//         "ljklkjlkj",
//         "kjljklkj",
//     ]);
//     const [done, setDone] = useState(new Set());
//     function handleInput(e) {
//         setNewTodo(e.target.value);
//     }

//     function handleClick() {
//         if (newTodo) {
//         setTodo(function (todo) {
//             return [...todo, newTodo];
//         });
//         setNewTodo("");
//         }
//         console.log(todo);
//     }

//     function handleDone(index) {
//         setDone((done) => new Set([...done, index]));
//     }

//     function sleep(ms) {
//         return new Promise((resolve) => setTimeout(resolve, ms));
//     }

//     useEffect(() => {
//         async function start() {
//         if (todo.length > 6) {
//             await sleep(5000);
//             if (reset > 0) {
//             ulref.current.childNodes[0].scrollIntoView({ behavior: "smooth" });
//             }
//             let index = 5;
//             let incrementer = 5;
//             let isreset = false;
//             while (true) {
//             if (stop.current) {
//                 console.log("Stopped");
//                 break;
//             }
//             let x = ulref.current.childNodes[index];
//             x.scrollIntoView({ behavior: "smooth" });
//             if (index + incrementer >= todo.length && !isreset) {
//                 incrementer *= -1;
//                 isreset = true;
//             } else if (index + incrementer < 0 && isreset) {
//                 incrementer *= -1;
//                 isreset = false;
//             }
//             await sleep(5000);
//             index += incrementer;
//             }
//         }
//         }
//         start();
//     }, [reset, todo]);

//     function createTodoList(todo, done) {
//         return todo.map((value, index) => {
//         let isStricked = false;
//         if (done.has(index)) {
//             isStricked = true;
//         }
//         return (
//             <li
//             className={"d-flex justify-content-between list-group-item"}
//             id={index}
//             key={index}
//             >
//             <span className={`${isStricked ? "striked" : ""}`}>
//                 {index + 1}. {value}
//             </span>
//             <button
//                 onClick={() => handleDone(index)}
//                 className="btn btn-sm btn-secondary"
//             >
//                 Done
//             </button>
//             </li>
//         );
//         });
//     }

//     return (
//         <div className="container-fluid h-100 bg-1 p-3">
//         <div className="container">
//             <div className="row">
//             <div className="col-8 bg-2 list-group-col pt-1">
//                 <ul
//                 onMouseEnter={() => (stop.current = true)}
//                 onMouseLeave={() => {
//                     stop.current = false;
//                     return setReset((reset) => reset + 1);
//                 }}
//                 ref={ulref}
//                 className="list-group"
//                 >
//                 {createTodoList(todo, done)}
//                 </ul>
//             </div>
//             <div className="col-4">
//                 <div className="row">
//                 <div className="input-group input-group-sm">
//                     <input
//                     type="text"
//                     className="form-control"
//                     onChange={handleInput}
//                     value={newTodo}
//                     />
//                 </div>
//                 </div>
//                 <div className="row mt-2 ">
//                 <div className="col d-flex justify-content-end">
//                     <button onClick={handleClick} className="btn btn-warning">
//                     Submit
//                     </button>{" "}
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default ToDoList;
