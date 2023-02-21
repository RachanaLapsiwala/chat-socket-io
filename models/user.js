module.exports = (sequeLize,DataTypes) =>{
    const User = sequeLize.define('user',{
        username:DataTypes.STRING,
        password:DataTypes.STRING, 
    },{
        freezeTableName:true
    }); 
    return User;
}