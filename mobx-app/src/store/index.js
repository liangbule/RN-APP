import { observable , action , computed} from 'mobx'

class Store {
    @observable bannerlist = []
    @observable postlist = {}


    @action
    getBanner(){

    }
}

export default new Store()