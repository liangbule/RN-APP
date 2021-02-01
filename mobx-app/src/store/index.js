import { observable , action , computed} from 'mobx'

class Store {
    @observable bannerlist = [1,2,3] // 默认数据
    @observable postlist = {
        name: '杜翔',
        age: 18,
        sex: '男'
    }


    @action
    getBanner(value){
        this.bannerlist = value
    }


    @action
    getProlist(){
        console.log(this.postlist);
    }
}

export default new Store()