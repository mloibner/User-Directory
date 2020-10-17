//write JSX to render the html style and event listeners
import React from "react";

export function Table(props) {
    return (
    <container>
    <div>
    <table>
        <thead><tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Username</th>

        </tr></thead>
        <tbody>
        { props.users.map((user) => 
                <tr key={user.id.value}>
                    <td>{user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td>{user.email}</td>
                    <td>{user.login.username}</td>
                </tr>
        )}
        </tbody>
    </table>
    </div>
    </container>
)};