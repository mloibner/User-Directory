//write JSX to render the html style and event listeners
import React from "react";

export function Table(props) {
    return (<table>
        <thead><tr>
            <th>Name</th>
            <th>Surname</th>

        </tr></thead>
        <tbody>
        { props.users.map((user) => 
                <tr key={user.id.value}>
                    <td>{user.name.first}</td>
                    <td>{user.name.last}</td>
                </tr>
        )}
        </tbody>
    </table>
)};