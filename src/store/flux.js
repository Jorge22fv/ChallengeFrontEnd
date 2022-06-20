const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            users: null,
            name: null,
            email: null,
            age: null,
        },
        actions: {
            getUsers: () => {
                const requestOptions = {
                    method: "GET",
                    redirect: 'follow'
                };
                fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
                    .then(response => response.json())
                    .then(result => setStore({ users: result }))
                    .catch(error => console.log('error', error));
            },

            setData: (userInfo) => {

                setStore({ name: userInfo.name, email: userInfo.email, age: userInfo.age })

            }

        }
    }
}

export default getState;
