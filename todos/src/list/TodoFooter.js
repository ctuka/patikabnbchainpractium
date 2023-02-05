import  { useState } from "react";

const TodoFooter =({ todos, setTodos, status, setStatus }) => {

    const unCompleted = todos.filter((todo) => todo.done == false); // completed olmayanları filtreleyip unCompleted değişkenine atıyoruz. items left kısmında göstermek için.
    const completed = todos.filter((todo) => todo.done == true); // completed olanları filtreleyip completed değişkenine atıyoruz. clear completed butonunda göstermek için. completed.length == 0 ise clear completed butonu gizleniyor.
  
    const clearCompleted = (e) => {
        
      e.preventDefault();
      setTodos(todos.filter((todo) => todo.done == false)); //  completed olanları filtreleyip setTodos ile todos değişkenine atıyoruz. Clear completed butonuna basınca completed olanlar siliniyor.
    };
  
    const clickStyle = (e) => {
      setStatus(e.target.id); // e.target.id = all, active, completed alıp status değişkenine atıyoruz. Ardından app.jsde swtich'e statusu atayıp case ile status değişkenini kontrol ediyoruz.
    };




    return (
        <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{unCompleted.length}</strong> // items left
        </span>

        <ul className="filters">
          <li>
            <a
              onClick={clickStyle}
              className={status === "all" ? "selected" : ""}
              id="all"
            >
              All
            </a>
          </li>
          <li>
            <a
              onClick={clickStyle}
              className={status === "active" ? "selected" : ""}
              id="active"
            >
              Active
            </a>
          </li>
          <li>
            <a
              onClick={clickStyle}
              className={status === "completed" ? "selected" : ""}
              id="completed"
            >
              Completed
            </a>
          </li>
        </ul>

        <button
          className={completed == 0 ? "hidden" : "clear-completed"}
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
    
}

export  default TodoFooter;