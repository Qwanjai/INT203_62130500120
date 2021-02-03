const app = {
    data() {
        return {
            name:'Qwanjai Deelertpradit',
            igName:'@_qjdee',
            description:'SIT Kmutt student',
            images:'./images/profile.jpg',
            interested1:'#webdesign',
            interested2:'#coding',
            interested3:'#reading'
        }
    }
}
// Vue.createApp(app).mount('#app')
mountedApp = Vue.createApp(app).mount('#app')