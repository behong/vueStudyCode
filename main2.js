const app = new Vue({
    el : "#app",
    data :{
        friends : [],
    },
    methods:{
        delFriend(id ,i){
            fetch("http://rest.learncode.academy/api/vue-5/friends/" + id, {
                method : "DELETE"
            })
            .then(() =>{
                //console.log("Deleted")
                this.friends.splice(i,1);
            })
        }, 
    },       
    mounted(){
        fetch("http://rest.learncode.academy/api/vue-5/friends")
            .then(response => response.json())
            .then((data) =>{
                console.log(data);
                this.friends = data
            })
    },
    template : 
    `
    <div>
       <li v-for="item, i in friends">
       <button v-on:click="delFriend(item.id,i)">x</button>{{item.name}}
       </li>
    </div>
    `
})