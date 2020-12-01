const app=new Vue({
    el:"#app",
    data:{
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods:{
        add(index){
            this.books[index].count++;
        },
        subtract(index){
            this.books[index].count--;
        },
        remove(index){
            this.books.splice(index,1);
        }
    },
    computed:{
      total:function () {
          //比较垃圾的方法
          /*let totals =0;
          for(let i=0;i<this.books.length;i++){
              totals +=this.books[i].count*this.books[i].price;
          }
          console.log(totals);
          return totals;*/
          //高阶函数，类似JAVA的流式编程
          let total=this.books.reduce((pre,book) =>{return pre+book.count*book.price},0);
          return total;
      }
    },
    filters:{
        showPrice(price){
            return "￥"+price;
        }
    }
});