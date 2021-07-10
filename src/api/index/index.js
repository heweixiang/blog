/*
 * @ModeRule: index的API封装
 * @Author: 何维想
 * @Date: 2021-07-06 23:29:52
 * @EditAuthor: heweixiang1110@163.com
 * @LastEditTime: 2021-07-11 01:49:46
 */
import request from "../../utils/request"
const { Get, Post } = request

const index = {
    test() { return Post("aaa", { a: 1 }) }
}

export default index