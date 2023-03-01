<script lang="ts">
    
export let Question: string;
export let Answer: string;
export let Callback: (boolean) => void;


let QuestionSide: boolean = true;
   
function flip(ev){
    QuestionSide = !QuestionSide;
}

$: if(Question && Answer){
    QuestionSide = true;
    console.log(Answer)
}

</script>

<div class="card">
    <div class="card-top" on:click={flip}>
        {#if QuestionSide}
            <p>{Question}</p>
        {:else}
            <p>{Answer}</p>
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
    padding: 0px;
    width: 350px;
}
.card-top{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px;
    max-height: 90vh;
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