const io = require("socket.io")(8800, {
    cors:{
        origin: "http://localhost:3000"
    }
})

let activeUsers = []

io.on("connection", (socket) => {
    //add new User
    socket.on("new-user-add", (newUserId) => {
        //if user is not previously added
        if(!activeUsers.some((user)=> user.userId === newUserId)){
            activeUsers.push({
                userId: newUserId,
                socketId: socket.id
            })
        }
        console.log("Connected UsersS  ", activeUsers);      //console logged to terminal side
        io.emit("get-user", activeUsers)        
    })

    //send message
    socket.on("send-message", (data) => {
        const {receiverId} = data;
        const user = activeUsers.find((user)=> user.userId === receiverId);
        console.log("sending from socket to receiver: ", receiverId);       //shows up correctly
        console.log("data : ", data);
        if(user){
            io.to(user.socketId).emit("receive-message", data)      //emit is sending to client side
        }
    }) 

    socket.on("disconnect",()=>{
        activeUsers = activeUsers.filter((user)=> user.socketId !== socket.id)      //filter out the user that is trying to disconnect
        console.log("User disconnected ", activeUsers)
        io.emit("get-user",activeUsers)
    })
})