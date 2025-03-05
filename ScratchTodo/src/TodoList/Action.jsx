export const AddTodos = (value) => {
    return{ type: "ADD_TODOS" , payload : value};
}

export const DeleteTodos = (id) => {
    return  {type: "DELETE_TODOS" , payload : id};
}
    