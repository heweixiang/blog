/*
 * @ModeRule: index的API封装
 * @Author: 何维想
 * @Date: 2021-07-06 23:29:52
 * @EditAuthor: heweixiang1110@163.com
 * @LastEditTime: 2021-07-06 23:49:58
 */
import request from "../../utils/request"

const index = {
    test() {
        request.post("aaa", { a: 1 }).then(res => {
            console.log(res);
        }).catch(err => console.log(err))
    }
}

export default index