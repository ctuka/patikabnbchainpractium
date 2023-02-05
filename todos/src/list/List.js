import {useState , useEffect} from 'react'
import TodoFooter from './TodoFooter';

//const initialFormValues = {text:"", done:false};
function List({todos, addTodo, deleteItem, status, setStatus, filteredTodos} ) {
    const [checked, setChecked] = useState(true);
    const [Todos, setTodos] = useState(todos);
    const [deleted, setDeleted] = useState();

    useEffect(() =>
    {
      console.log("List_constructor_Set");
      console.log(Todos);
      console.log("List_constructor_Set");
      
      renderList();
    },[Todos]);

    useEffect(() =>
    {
      console.log("List_todos_Set");
      console.log(todos);
      console.log("List_todos_Set");
      setTodos(todos);
      
    },[todos]);
    
    //let ch = e.target.checked //Inputun icerinde deger checked ile aliniyor
    const handleChangeInput = (index) => {
      const newTodo = [... Todos];
      console.log("List_changeInput");
      newTodo[index].done = !newTodo[index].done;
      setChecked(newTodo[index].done);
      setTodos(newTodo);    
    };

    const handleDeleteItem = (e) => {
      
      deleteItem(e);
      console.log("#####handelDELETEITEM#####");
      console.log({todos});
      console.log("#####handelDELETEITEM#####");
      
    }

//deleteItem ile birlikte i gonderiliyor deleteItem(i) gibi
    const renderList= (() => { 
      console.log("#####List_RenderList#####");
      console.log({Todos});
      console.log("#####List_RenderList#####");
      if(!Todos) return null;
      console.log("filteredTodos");
      console.log(filteredTodos);
      console.log("filteredTodos");
      return  filteredTodos ==null ? Todos.map((todo, index) => (
        <li className="todo-list" style={{ textDecoration: todo.done ? 'line-through' : 'none' }} key={index}>
        <div className="view" >
          <>
          <input //Listeleme elemaninin en disindaki bolume index veriliyor
        className='todo-list'
        name="done" 
        type="checkbox"  
        checked={todo.done}
        onChange={() => handleChangeInput(index)} /></>
        <label >{todo.text}</label>
        
        <><button className="destroy" onClick={() => handleDeleteItem(index)} /></>
        </div></li>)) 
        : filteredTodos.map((todo, index) => (
  <li className="todo-list" style={{ textDecoration: todo.done ? 'line-through' : 'none' }} key={index}>
  <div className="view" >
    <>
    <input //Listeleme elemaninin en disindaki bolume index veriliyor
  className='todo-list'
  name="done" 
  type="checkbox"  
  checked={todo.done}
  onChange={() => handleChangeInput(index)} /></>
  <label >{todo.text}</label>
  
  <><button className="destroy" onClick={() => handleDeleteItem(index)} /></>
  </div></li>))
}); 
    
    

    
  return (
    <section className="main">
    <div>
        <ul className='todo-list'>
        {renderList()}
        </ul> 
        <TodoFooter
        todos={todos}
        setTodos={addTodo}
        status={status}
        setStatus={setStatus}
      />    
    </div></section>
  )
}

export default List;
