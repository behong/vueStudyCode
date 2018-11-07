Vue.component(`friend-component`,{
props:['friend'],
filters :{
    fullName(value){
        return `${value.last} ${value.first}`
    },
    ageInOneYear(age){
        return age +1;
    }
},
methods :{
    decremenAge(friend){
        friend.age = friend.age + 1;
    },        
    incremenAge(friend){
        friend.age = friend.age + 1;
    },
},
template : 
`
    <div>
        <h4>{{friend | fullName}}</h4>
        <h5>age : {{friend.age}}</h5>
        <button v-on:click="incremenAge(friend)"> + </button>
        <button v-on:click="decremenAge(friend)"> - </button>
        <input v-model="friend.first" />
        <input v-model="friend.last" />
    </div>
`
});

const app = new Vue({
    el :"#app",
    data :{
        friends : [
            {
                first: "JIU",
                last : "Hong",
                age : 7            
            },
            {
                first: "SOU",
                last : "Hong",
                age : 4
            }
        ]
    },
    filters:{
        fullName(value){
            return `${value.last} ${value.first}`
        },
        ageInOneYear(age){
            return age +1;
        }
    },
    methods :{
        decremenAge(friend){
            friend.age = friend.age + 1;
        },        
        incremenAge(friend){
            friend.age = friend.age + 1;
        },
    },
    template : `
    <div>
    <!--friend component 에서 가져온다 -->
    <friend-component v-for="item in friends" v-bind:friend="item" />
    </div>
    `
})