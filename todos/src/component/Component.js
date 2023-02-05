import { useState, useEffect } from 'react'
import List from '../list/List';
import Form from '../form/Form';



function Component () {
  const [todos, setTodos] = useState([
    {
      text: "Taste JavaScript",
      done: true
    },
    {
      text: "Code furiously",
      done: true
    },
    {
      text: "Promote Mavo",
      done: false
    },
    {
      text: "Give talks",
      done: false
    },
    {
      text: "Write tutorials",
      done: true
    },
    {
      text: "Have a life!",
      done: false
    },
  ]);

  const [status, setStatus] = useState(""); // Todo listemizin durumunu tutacak.
  const [filteredTodos, setFilteredTodos] = useState([]); // Filtrelenmiş todo listemizi tutacak.
  
  useEffect(() => {
    // Todo listemizde değişiklik olduğunda çalışacak.
    const filterHandler = () => {
      let copyOrginalList = todos;
      switch (
        status // status değişkenine göre filtreleme işlemi yapacak.
      ) {
        case "completed": // Eğer status değişkeni completed ise
          setFilteredTodos(todos.filter((todo) => todo.done === true)); // completed true olanları filtrele
          
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.done === false)); // completed false olanları filtrele
          
          break;
        default: // Eğer status değişkeni completed veya active değilse tüm todoları filtrele
          setFilteredTodos(todos);
          
          break;
      }
    };

    filterHandler(); //

  }, [todos, status]); // todos ve status değişkenlerinde değişiklik olduğunda filterHandler fonksiyonunu çalıştır.
  
  
  /* 
  useEffect(()=> {
      console.log("##########ComponentUse Efect ######");
      console.log({todos});
      console.log("##########ComponentUse Efect ######");
  },[todos]);
 */
  const deleteItem = ((index) => {
    console.log("####Component_DELETE###");
    console.log(index);
    console.log("####Component_DELETE###");
    let copyListItems = [...todos];
  
    copyListItems.splice(index, 1);
    console.log("####Component_DELETEItem Copylist###");
    console.log(copyListItems);
    console.log("####Component_DELETEItem Copylist###");
    setTodos(copyListItems); //Yeni liste uzerinden atamalar olmadigi icin sayfa
    //addTodo(Todos);
    console.log("####DELETE###");
    console.log({todos});
    console.log("####DELETE###");
  });

  

  return (
    <div id='container'>
      <section><h1>Todos</h1>      
     <div>
      <br></br><br></br>
      <Form  todo={todos} addTodos={setTodos}/>
      <List todos={todos} addTodo={setTodos} deleteItem={deleteItem} status={status}
          setStatus={setStatus} filteredTodos={filteredTodos}/>

      <footer className="footer">
	    <p>Click to edit a todo</p>
	    <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>

      </div>
      </section>
    </div>
  );
}

export default Component;

