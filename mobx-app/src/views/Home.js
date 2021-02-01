import React, { Component } from 'react'
import { observer , inject} from 'mobx-react'


@inject('store') // 注入
@observer // 观察
class Home extends Component {
    componentDidMount(){
        console.log(this,'this');
    }
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}
export default Home