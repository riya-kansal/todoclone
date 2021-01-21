const expop={
    expenses:[],
    add(id,name,cost,date,remarks,photo,color,flag=false)
     {
        var obj=new expense(id,name,cost,date,remarks,photo,color,flag);
        this.expenses.push(obj);
        return obj;
     },
     len()
     {
         return(this.expenses.length);
     },
     updateMarked()
     {
        expense.flag
     },
     findById(id)
     {
        let expenseObject = this.expenses.find(expense=>expense.id==id);
        if(expenseObject){
            expenseObject.flag= !expenseObject.flag;
        }
     }
     ,
     removeMarked()
     {
         this.expenses=this.expenses.filter(expense=>expense.flag==false);

     },
     getExpenses()
     {
         return this.expenses;
     },
     mark()
     {
        return this.expenses.filter(expense=>expense.flag).length;
     },
     searchById(id)
     {
        return this.expenses.find(expense=>expense.id==id);
     }
   
}