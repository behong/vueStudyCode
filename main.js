const app = new Vue({
    el :"#app",
    data :{
        bobby :{
            name: "bobby",
            age : 25
        },
        jon :{
            name: "jon",
            age : 35            
        }
    },
    template : `
    <div>
    <h1>Hi Name {{bobby.name}}</h1>
    <h2>Age : {{bobby.age}} </h2>
    <h1>Hi Name {{jon.name}}</h1>
    <h2>Age : {{jon.age}} </h2>    
    </div>
    `
})