const React = require('react')

function Index(props) {
    return(
        <div>
            <h1>todos Index Page</h1>
            <a href="/todos/new">Create a new todo here</a>
             <ul>
                {
                    props.users.map((todo) => {
                        return (
                            <li>
                            <a href={`/todos/${todo._id}`}>{todo.name}</a>
                            </li>
                        ) 
                    })
                }
            </ul> 
        </div>
    )
}

module.exports = Index