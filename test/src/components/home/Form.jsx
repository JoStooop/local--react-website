import React from 'react';
import {useForm} from "react-hook-form";


const Form = () => {

  const {
    register, // позволит регистрировать различные поля для формы
    formState: {       // объект с различными свойствами
      errors
    },
    handleSubmit,    // некая обертка над нашим кастомным handler

  } = useForm()

  const onSubmit = (data) => {
    // console.log(JSON.stringify(data))

  }


  // console.log()
  // console.log(register())

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <label>First Name:
          <input {...register('firstName',{required: "Поле обязательно для заполнения"})}/>
        </label>
        <div style={{height: '40px', }}>
          {errors?.firstName && <p style={{color: 'red'}}>{errors?.firstName?.message || 'Errors message'}</p>}
        </div>
        <br/>
        <input type="password" name='password' placeholder='Enter your password'/>
        <br/>
        <button type='submit'>Registration</button>
      </form>
      <ListOfTenThings />
    </div>
  );
};

export default Form;

// Вызывает колбэк numTimes раз для создания повторяющего компонента
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  // console.log(i)

  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>Это элемент списка с ключом {index}</div>}
    </Repeat>
  );
}
