import classes from './MealItemForm.module.css';
import Input from "../../UI/input";
import {useRef, useState} from "react";

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0
    || enteredAmountNumber < 1
    || enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  }
  return <form className={classes.form}>
    <Input
      ref={amountInputRef}
      label="Amount"
      input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }} />
    <button onClick={submitHandler}>+ Add</button>
    {!amountIsValid && <p>Please enter a valid amount</p>}
  </form>
};

export default MealItemForm;
