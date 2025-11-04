import React from 'react'
import styles from './Todoitem.module.css'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'

const TodoItem = () => {
  return (
      <div className={styles.todoItem}>
        <h2 className={styles.todoItem_title}>Aufgabe hinzufügen</h2>
        <Input placeholder="Aufgabe hier eingeben..." className={styles.todoItem_field}/> 
        {/* kalendar */}
        <Button />
    </div>
  )
}

export default TodoItem