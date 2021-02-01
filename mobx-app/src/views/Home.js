import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class Home extends Component {
    render() {
        const {postlist,bannerlist} = this.props
        console.log(222,postlist);
        return (
            <div>
                Home
               <div>姓名:{postlist.name}</div>
               <div>年龄:{postlist.age}</div>
               <div>性别:{postlist.sex}</div>
            {
                bannerlist.map((item,index) => {
                    return (
                        <span key={index}>{item}</span>
                    )
                })
            }
            </div>
        )   
    }
}
export default Home