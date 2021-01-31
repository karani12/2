<template >
    <div>
        <h1>Markdown</h1>
    </div>
    <div id="articles">
    <article id="left">
    <textarea :value="text"  @input="update"></textarea>
    
    </article>
    <article id="right" v-html="markedText"></article>
    </div>

</template>
<script>
import marked from "marked";
import debounce from '@/utilities/mixins/debounce'
export default {



    

    /*
    *********LIFE CYCLE HOOKS*******
        beforeCreate(){
        console.log('before create')
    },
    created(){
        console.log('created')
    },
    beforeMount() {
        console.log("beforemount")
    },
    mounted() {
        console.log('mounted')
    },
    beforeUnmount() {
        console.log('before unmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    beforeUpdate() {
        console.log('before update')
    },
    updated() {
        console.log('updated')
    },
    
    */

    mixins:[debounce],
    data() {
        return {
             text: "",
        }
    },

    computed:{
        markedText(){
            return marked(this.text);
        },
    },
    methods:{
        
        update(e){
                const task=() =>(this.text = e.target.value) 
                this.debounce(task,500);
                    
        },

    }
}
</script>
<style>
#left{
    display: flex;
    justify-content: center;
    background: black;

}
#right{
    display: flex;
    justify-content: flex-start; 
    background: white;
    color: black;
    font-weight: 800;
    padding: 7px;
    flex-direction: column;

}
#articles{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
#articles>article{
    width: 40vw;
    height: 70vh;
    margin: 15px;
    border-radius:12px  ;
}
textarea{
    width: 100%;
    height: 100%;
    background: inherit;
    color: inherit;
    font-size: 1.2rem ;
}

    
</style>