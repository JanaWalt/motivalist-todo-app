import React from 'react'
import styles from './Todoitem.module.css'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'

const TodoItem = () => {
  return (
    <div className={styles.wrapper}>
        <Input /> 
        <Button />
    </div>
  )
}

export default TodoItem