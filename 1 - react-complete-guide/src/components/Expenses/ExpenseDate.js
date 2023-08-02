import "./ExpenseDate.css"

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("es-MX", { month: "long" });
  const day = props.date.toLocaleString("es-MX", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__date">{day}</div>
    </div>
  );
}

export default ExpenseDate;
