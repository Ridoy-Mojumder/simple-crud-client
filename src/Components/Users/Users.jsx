
import { useState } from 'react';
import User from '../User/User';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadingUsers = useLoaderData();
    const [users, setUsers] = useState(loadingUsers)

    const handleUserDelete = _id => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            });
    };

    return (
        <div className="min-h-screen bg-cover flex justify-center bg-gray-200  gap-10 justify-items-center items-center p-8 " >
            <div className="max-w-3xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Users</h1>
                {users.length === 0 ? (
                    <p className="text-lg text-gray-700">No users found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                        {users.map(user => (
                            <User key={user._id} user={user} onDelete={handleUserDelete} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;
