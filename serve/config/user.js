//关于用户表的增删改查
let counter = 0
let user = {
    insert: "insert into ADD_USER (id,name,password) VALUES ('+ `${counter++}` +',?,?)" ,
    query: "select * from ADD_USER",
    queryName: "select * from ADD_USER WHERE name = ? and password = ? ",
    update: "update ADD_USER SET name=?,password=? WHERE id=?",
    delete: "delete form ADD_USER WHERE id=?"
}
module.exports = user