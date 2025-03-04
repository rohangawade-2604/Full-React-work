export const AddTodos = (value) => {
    return{ type: "ADD_TODOS" , payload : value};
}

export const DeleteTodos = { type: "DELETE_TODOS"};