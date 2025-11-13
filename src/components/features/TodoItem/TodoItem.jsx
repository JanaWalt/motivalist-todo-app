import React from "react";
import styles from "./Todoitem.module.css";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { IoTrashBinSharp } from "react-icons/io5";
import { RiEdit2Line } from "react-icons/ri";



const TodoItem = () => {
  return (
    <div className={styles.todoItem}>
      <h2 className={styles.todoItem_title}>Aufgabe hinzufügen</h2>
      <Input
        placeholder="Aufgabe hier eingeben..."
        className={styles.todoItem_field}
      />
      {/* kalendar */}
      <Button variant="primary">+ Hinzufügen</Button>
      <Button variant="secondary">Abbrechen</Button>
      <Button variant="danger">Löschen</Button>
<button className={styles.iconButton}><IoTrashBinSharp size={22} color="#faa0aa"/></button>
<button className={styles.iconButton}><RiEdit2Line size={22} color="#88b5fdff"/></button>




    </div>
  );
};

export default TodoItem;
