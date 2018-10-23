// components/question-component/question-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    question:{
      type:Object
    },
    selected:{
      type:Array,
      value:[]
    },
    answers:{
      type:Array,
      value:[]
    },
    selectable:{
      type: Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    select: function (event) {
      var choiceid = event.target.dataset.choiceid;
      if (this.data.selectable) {
        if (this.data.question.type === 'm') {
          if (!this.data.selected) {
            this.setData({
              selected: [choiceid]
            });
          } else if (this.data.selected.includes(choiceid)) {
            var selected = this.data.selected;
            selected.splice(selected.indexOf(choiceid), 1);
            this.setData({
              selected:selected
            });
          } else {
            var selected = this.data.selected;
            selected.push(choiceid);
            this.setData({
              selected:selected
            });
          }
        } else {
          this.setData({
            selected: [choiceid]
          });
        }
        this.triggerEvent('selectChange', this.data.selected, {});
      }
      
    }
  },

})
