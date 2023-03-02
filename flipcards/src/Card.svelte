<script lang="ts">
    import type { Question } from "./types";


    
export let Question: Question;



export let Callback: (boolean) => void;


let QuestionSide: boolean = true;
   
function flip(ev){
    QuestionSide = !QuestionSide;
}

$: if(Question){
    QuestionSide = true;
}

</script>

<div class="card">
    <div class="card-header">
        <p><b>{Question.t}</b> Question nr. {Question.id}</p>
    </div>
    <div class="card-top" on:click={flip}>
        {#if QuestionSide}
            <p>{Question.q}</p>
        {:else}
            <p>{Question.a}</p>
        {/if}
    </div>
    
    <div class="card-bottom">
        {#if QuestionSide}
            <p on:click={flip}>Press to flip</p>    
        {:else}
            <div class="card-rate">
                <button on:click={() => {Callback(true)}}>Correct</button>
                <button on:click={() => {Callback(false)}}>Wrong</button>
            </div>    
        {/if}
    </div>
    
</div>


<style>
.card {
    background-color: rgb(102, 102, 219);
    border-radius: 15px;
    color: white;
    padding: 10px;
    max-width: 80vw;
    max-height: 80vh;
}
.card-top{
    overflow-y: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px;
    white-space: pre-line;
    text-align: left;
}

.card-rate{
    display: flex;
}

.card-rate button{
    width: 50%;
    color: white;
    background-color: transparent;
    border-radius: 0px 0px 15px 15px;
}

.card-rate button:hover{
    background-color: rgba(0, 0, 0, 0.103);
}

.card-bottom{
    
    align-items: center;
}

.card-bottom p{
    text-align: center;
    width: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}

.card hr{
    width: 100%;
}
</style>