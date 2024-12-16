import { fetchUsers } from "@/utils/actions";
import DeleteButton from "./DeleteButton";

async function UsersList() {
  const users = await fetchUsers();
  return (
    <div className="mt-4">
      {users.length ? (
        <div>
          {users.map((user) => {
            return (
              <h4
                key={user.id}
                className="capitalize text-lg flex justify-between items-center mb-2"
              >
                {user.firstName} {user.lastName}
                <DeleteButton id={user.id} />
              </h4>
            );
          })}
        </div>
      ) : (
        <p>No users found...</p>
      )}
    </div>
  );
}
export default UsersList;

// AI
// import { useEffect, useState } from "react";
// import { fetchUsers } from "@/utils/actions";
// import { User } from "@/types";

// const UsersList = () => {
//   const [users, setUsers] = useState<User[]>([]); // Define the state type explicitly
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data: User[] = await fetchUsers(); // Ensure 'fetchUsers' returns the correct type
//       setUsers(data); // No type conflict now
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>
//           {user.firstName} {user.lastName}
//         </li> // TypeScript now recognizes 'id' and 'name'
//       ))}
//     </ul>
//   );
// };

// export default UsersList;
