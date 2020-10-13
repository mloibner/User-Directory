//write JSX to render the html style and event listeners

function Table(props) {
    return (<div>
        { props.users.map((user) => {
            <div>{ user.name }</div>
        }) }
    </div>)
}