const {createApp, ref} = Vue;

const app = createApp({
    
    template:`
    <h1>Hola Mundo</h1>
    <p>Desde app.json</p>
    
    `
})

app.mount('#myApp')