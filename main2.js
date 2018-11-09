const app = new Vue({
    el : "#app",
    data :{
        editFriend : null,
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
        updateFriend(item){
            fetch("http://rest.learncode.academy/api/vue-5/friends/" + item.id, {
                body : JSON.stringify(item),
                method : "PUT",
                headers :{
                    "Content-Type" : "application/json"
                },

            })
            .then(() =>{
                //console.log("update")
                this.editFriend =null;
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
       <div v-if="editFriend === item.id">
        <input v-on:keyup.13 ="updateFriend(item)" v-model="item.name" />
        <button v-on:click="updateFriend(item)">save</button>
       </div>
       <div v-else>
        <button v-on:click="editFriend = item.id">edit</button>
        <button v-on:click="delFriend(item.id,i)">x</button>{{item.name}}
       </div>
       </li>
    </div>
    `
})