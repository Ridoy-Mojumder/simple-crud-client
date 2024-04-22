const Adduser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('User added successfully');
                }
                form.reset();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="min-h-screen bg-cover flex justify-center bg-gray-200  gap-10 justify-items-center items-center p-8 " >
            <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-8">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Add New User</h2>
                    <form onSubmit={handleAddUser} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Adduser;
