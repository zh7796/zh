import { get, post } from "./httpUrl";

// 机械列表
const getJixie = (data) => get("/jixie",data);
//树状结构接口

const getTree = (data) => get("/navigate-tree",data);
//机械类别

const Category = (data) => get("/category",data);

//名称

const getNames = (data) => post("/names",data);

export {
    getJixie,
    getTree,
    Category,
    getNames
}