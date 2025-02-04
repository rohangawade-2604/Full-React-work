export const Users = [{ id: 1 , name: "Rohan Gawade" }, { id: 2 , name: "Sid 26" }];

export const createConnection = (user) => {
    console.log("Start learning", user);

    let id;

    const listen = (call) => {
        id = setInterval(() => {
            let messages = `New message from ${user.name} at ${new Date().toLocaleTimeString()}`;
            call(messages);
        }, 2000);
    };

    const unsubscribed = () => {
        clearInterval(id);
    };

    return { listen, unsubscribed };  
};
