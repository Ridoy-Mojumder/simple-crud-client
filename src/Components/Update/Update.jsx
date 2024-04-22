import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedData = useLoaderData();

    const handleUpdated = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);

        fetch(`http://localhost:5000/users/${loadedData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert("Data updated Successfully")
                }
            })
    }

    return (
        <div className="min-h-screen bg-cover flex justify-center bg-gray-200  gap-10 justify-items-center items-center p-8 ">
            <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md ">
                <h1 className="text-2xl font-semibold mb-4">Update User of {loadedData.name}</h1>
                <form onSubmit={handleUpdated}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">Name</label>
                        <input type="text" id="name" name="name" defaultValue={loadedData?.name} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
                        <input type="email" id="email" name="email" defaultValue={loadedData?.email} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;
