function TodoItem ({todo, index}) {
    return (
        <li className="list-group-item d-flex justify-content-between" key={index}>
        <div>
        <input className="form-check-input me-1" type="checkbox"/>
        <span className="me-5">{todo}</span>
        </div>
        <button className="btn btn-danger">Delete</button>
        
        </li>
        )

}

export default TodoItem;