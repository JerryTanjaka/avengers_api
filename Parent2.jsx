/** @format */

import Enfant from "./Enfant";

export default function Parent2() {
	const Users = { name: "Kushina", age: "28", location: "Konoha" };

	return (
		<div>
			<Enfant  age={Users.age} location={"yo no sai"} />
		</div>
	);
}
