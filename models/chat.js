module.exports = (sequeLize,DataTypes) =>{
    const Chat = sequeLize.define('chat',{
        message:DataTypes.STRING,
        author:DataTypes.STRING,
        room:DataTypes.STRING,
    },{
        freezeTableName:true
    }); 
    return Chat;
}