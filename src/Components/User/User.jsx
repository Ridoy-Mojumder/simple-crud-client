import { Link } from "react-router-dom";



const User = ({ user, onDelete }) => {
    const { _id, name, email } = user;

    return (
        <div className="bg-gradient-to-r from-blue-200 to-purple-200 shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h1 className="text-3xl font-bold text-blue-900 mb-2">{name}</h1>
                <p className="text-gray-700">{email}</p>
                <p className="text-gray-700">{_id}</p>
            </div>
            <div className="px-6 py-4 bg-blue-600 text-white">
                <button className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">View</button>
                <Link to={`/update/${_id}`}>
                    <button className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">Update</button>
                </Link>
                <button onClick={() => onDelete(_id)} className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mb-2">Delete</button>
            </div>
        </div>
    );
};

export default User;