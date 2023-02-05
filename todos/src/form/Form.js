import React, { useState, useEffect } from 'react'


const initialFormValues = {text:"", done:false};
function Form({todo, addTodos} ) { 
  console.log("Form");
  const [form, setForm] = useState(initialFormValues);
  const [checked, setChecked] = useState(false);
  const [counter, setCounter] = useState(0);
  
  useEffect(() =>
  {
    
    console.log("###FORM###");
    console.log("###FORM_checked degisti###");
    console.log(todo);
    console.log(form);
    console.log(checked);
    isChecked();
    console.log("counter :" + counter);
    console.log("###FORM###");
  },[checked]); //Bu kisim bir degisiklik oldugunda formu resetlemek icin

  const isChecked = () => {
   
    let copyPrev = [...todo];
    let copyList = [...todo];
    if (counter <= 0) {
      if(checked === true) 
    {
      setCounter(counter + 1);
      copyList.map((item) => (
        item.done = true
         )
      );
      addTodos(copyList);
    } 
      else{
      return;
    
  }
  }
    else {
      if(checked === true) //checkbox tikliysa
    {
      
      copyList.map((item) => (
        item.done = true
         )
      );
      addTodos(copyList);
    } else {
      copyList.map((item) => (
        item.done = false
         )
      );
      addTodos(copyList);
    }
    }
  
    
  };

  
  

  const onChangeInput = (e) => {
    console.log("Form_ocChangeInput");
    console.log(e.target.value);
    console.log(checked);
    console.log("Form_ocChangeInput");
    const target = e.target;
    //target checkboz ise deger olarak checkboxin icerigini degilse text in icerigini gondermek icin 
    //kullanilacak
    const value =  target.value; //target.type == "checkbox" ? target.checked :
    const name = target.name;
    setForm({...form, [name] : value});
    //setForm({...form, [e.target.name] : e.target.value, done : checked});
  };// Inputta degisiklik yapildiginda
  

  const onSubmitHandler = (e) => {
    e.preventDefault(); 
    if(form.text ==="" ){
      alert("Please enter a todo");
      return ;
    }
    console.log("###SUBMIT###");
    
    addTodos([...todo, form]);
    console.log("###SUBMIT###");
    setForm(initialFormValues);
  };

  
    //Submit todos icerigini arttirmiyor bir yerde tekrar eskisine guncelliyor
  return (
    
      <form onSubmit={onSubmitHandler}>
      <div>
      <section className="main" >
      <input 
      
      //className="toggle-all"
      name='toogle-all'
      type="checkbox"  
      checked={checked}
      //onClick={onClickChecked}
      onChange={() => setChecked(!checked)}/>
       <label htmlFor="toggle-all">Mark all as complete</label>
      <input 
      className="new-todo"
      name="text" 
      placeholder= 'What needs to be done?'  
      value={form.text} 
      onChange={onChangeInput} autoFocus/></section></div>
      
      </form>
    
    
  )
}


export default Form;
