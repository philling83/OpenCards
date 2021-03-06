import React, { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function UsersList() {
	const [users, setUsers] = useState([]);
	const currentUser = useSelector((state) => state.session.user);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch("/api/users/");
			const responseData = await response.json();
			setUsers(responseData.users);
		}
		fetchData();
  }, []);
  
	if (!currentUser) {
		return <Redirect to="/login" />;
	}

	const userComponents = users.map((user) => {
		return (
			<li key={user.id}>
				<NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
			</li>
		);
	});

	return (
		<>
			<h1>User List: </h1>
			<ul>{userComponents}</ul>
		</>
	);
}

export default UsersList;
