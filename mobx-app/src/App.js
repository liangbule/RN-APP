import React, { Component } from 'react'
// 引入组件
import Home from './views/Home'
import { observer , inject} from 'mobx-react'


@inject('store') // 注入
@observer // 观察
 class App  extends Component {

  componentDidMount(){
    console.log(1111,this);
    this.props.store.getBanner()
    this.props.store.getProlist()
}
  render() {
    console.log(333,this.props);
    const {postlist,bannerlist} = this.props.store
    console.log(postlist);
    return (
      <div>
        app
        {/* <Home bannlist={bannerlist}/> */}
        <Home {...this.props.store} />
      </div>
    )
  }
}
export default App