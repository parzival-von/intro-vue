const {createApp, ref} = Vue;

const app = createApp({
    
    template:`
    <h1>{{nuntius}}</h1>
    <p>{{auctor}}</p>
    `,

    setup(){
        
        const nuntius = ref("I'am Batman");
        const auctor = ref('Batman')

        setTimeout(()=>{
            nuntius.value = 'Soy Goku';
            auctor.value = 'Goku';
            console.log(nuntius);
        },1000);
        return{

            nuntius,
            auctor,
        }

    }

})

app.mount('#myApp')