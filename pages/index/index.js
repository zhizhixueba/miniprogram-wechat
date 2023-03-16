// index.js

import {queryHomeList} from '../../modules/api/index'

Page({
  data: {
      items: [
          {name: '', icon: '', mode: 1,tag: 'left'},
          {name: '', icon: '', mode: 0,tag: 'right'},
          {name: '', icon: '', mode: 0,tag: 'left'},
          {name: '', icon: '', mode: 1,tag: 'right'},
          {name: '', icon: '', mode: 1,tag: 'left'},
      ]
  },

  onLoad:async function() {
    const {code, data} = await queryHomeList();
    if(code ==0) {
        console.log(data)
    }
  }
})
