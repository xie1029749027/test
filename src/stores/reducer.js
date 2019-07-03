// export default (state = {
//   author: 'xie',
//   skill: ['ps', 'js', 'css']
// }, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

export default (state = {
  author: 'xie',
  sousuo: ["搜索", "123", "123123", "周黑鸭（广州五山路店)"],
  searchInputText: '',
  searchInputText1: '',
  //搜索框的值
  isShowGallery: false,
  imgUrl: '',
  footers: [{
    icon: '_3qJAJgmwFK8XUy7QH5OT8t _2JMxUK2tV5fNkgpziy4SwV',
    url: '/',
    title: '首页'
  }, {
    icon: '_3qJAJgmwFK8XUy7QH5OT8t _26drFUnsVh-214x7eRutxe',
    url: '/mune',
    title: '订单'
  }, {
    icon: '_3qJAJgmwFK8XUy7QH5OT8t NofT5VOaEk7jwz6aM-096',
    url: '/my',
    title: '我的'
  }]


}, action) => {
  switch (action.type) {
    case 'GETINPUTVALUE':
      return {
        ...state,
        searchInputText: action.searchInputText
      }
      case 'GETINPUTVALUE1':
        return {
          ...state,
          searchInputText1: action.searchInputText1
        }
        case 'SETVAL':
          return {
            ...state,
            searchInputText1: action.searchInputText1
          }
          case 'TOGGLEGALLERY':
            return {
              ...state,
              imgUrl: action.imgUrl,
                isShowGallery: action.isShowGallery
            }
            default:
              return state
  }
}