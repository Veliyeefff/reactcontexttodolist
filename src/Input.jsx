import { Formik,Form,Field } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { useTodo } from './Context/TodoContext';
import { v4 as uuidv4 } from 'uuid';



const TodoSchema = Yup.object().shape({
    todo:Yup.string().min(3).required()
})


function Input() {
    const {todos, settodos} = useTodo()
  return (
    <div>
            <Formik
                initialValues={{
                    todo:"",
                    id:""
                }}
                validationSchema={TodoSchema}
                onSubmit={(value,{resetForm}) =>{
                    settodos([...todos,{todo:value.todo, id:uuidv4().substring(0,4)}])
                    resetForm()
                    console.log(todos)
                }}
            >
            {({values,errors})=>(
                <Form>
                    <Field name="todo" placeholder="Enter a todo"/>
                    {errors.todo ? <p style={{color:'red'}}>{errors.todo}</p>:null}
                    <button type='submit'>Add</button>
                </Form>
            )}
            </Formik>

    </div>
  )
}

export default Input