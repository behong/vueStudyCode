const app = new Vue({
    el :"#app",
    data :{
        JIU :{
            first: "JIU",
            last : "Hong",
            age : 7            
        },
        SOU :{
            first: "SOU",
            last : "Hong",
            age : 4
        }
    },
    /*
    computed :{
        JIUFullName(){
            return `${this.JIU.first} ${this.JIU.last}`
        },
        SOUFullName(){
            return `${this.SOU.first} ${this.SOU.last}`
        },
        SOUAgeInOneYear(){
            return this.SOU.age +1;
        }     
    },
    */
    filters:{
        fullName(value){
            return `${value.last} ${value.first}`
        },
        ageInOneYear(age){
            return age +1;
        }
    },
    template : `
    <div>
    <h1>Hi Name {{JIU | fullName}}</h1>
    <h2>Age : {{JIU.age | ageInOneYear}} </h2>
    <h1>Hi Name {{SOU | fullName}}</h1>
    <h2>Age : {{SOU.age | ageInOneYear}} </h2>    
    </div>
    `
})