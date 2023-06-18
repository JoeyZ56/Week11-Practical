const React = require('react')

function New (props) {
    return (
        <body>
            <header>
                <h1>New Todos</h1>
            </header>
            <main>
                <form action="/todos" method="POST">
                    title: <input type="text" name="title"></input><br/>
                    description: <input type="text" name="description"></input><br/>
                    date: <input type="date"></input><br/>
                    completed: <input type="checkbox"></input><br/>
                    <input type="submit" value="Create todos"></input><br/>

                </form>
            </main>
        </body>
    )
}

module.exports = New