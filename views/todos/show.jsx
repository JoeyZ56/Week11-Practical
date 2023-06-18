const React = require('react')

function Show(props) {
    const { title, _id, description, completed, date } = props.user
    return(
        <body>
            <header>
                <h1>{title}</h1>
            </header>
            <main>
                <h2>{description}</h2>
                <h3>{date}</h3>
                <h3>{_id}</h3>
                <h4>{completed}</h4>
            </main>
            <aside>
                <form action={`/todos/${_id}?_method=DELETE`} method="POST">
                    <input type="submit" value={`Delete ${name}`}></input><br/>
                    <a href ={`/todos${_id}/edit`}><button>{`Edit ${title}`}</button></a>
                </form>
            </aside>
        </body>
    )
}
module.exports = Show