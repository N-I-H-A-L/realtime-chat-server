const users = [];

const addUser = ({ id, name, room }) =>{
    //Turn name into lowercase and without spaces.
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    let existingUser = users.find((user)=> user.name==name && user.room==room);

    if(existingUser!=undefined){
        return {error: 'Username is already taken.'};
    }
    const user = {id: id, name: name, room: room};
    users.push(user);
    return user;
}

const removeUser = (id) =>{
    const index = users.findIndex((user)=>user.id==id);

    if(index!==-1) return users.splice(index, 1)[0];
    //[0] will lead to returning the deleted user.
}

const getUser = (id) =>{
    const index = users.findIndex((user)=> user.id==id);
    // console.log(users, index);
    if(index!=-1) return users[index];
    else{
        // console.log('User not found');
        return ;
    }
}

const getUsersInRoom = (room)=>{
    return users.filter((user)=>user.room==room);
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom };