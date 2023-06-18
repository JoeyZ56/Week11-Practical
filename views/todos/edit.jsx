const React = require('react')

function Edit (props) {
    return (
        <div>
            <h1>Edit todo</h1>
            <form action="/todos" method="POST">
                    title: <input type="text" name="title"></input>
                    description: <input type="text" name="description"></input>
                    date: <input type="date"></input>
                    completed: <input type="checkbox"></input>
                    <input type="submit" value="comnpletedtodos"></input>

                </form>
        </div>
    )
}

module.exports = Edit