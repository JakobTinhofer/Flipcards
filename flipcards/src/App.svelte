<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Card from './Card.svelte';
  import questionJson from "../../questions.json";
  import ProbList from './ProbList';
  import type { Question } from './types';
  
  const QuestionList: ProbList<Question> = new ProbList(); 
  let currentQ: Question

  let len: number;

  function nextQ(){
    currentQ = QuestionList.getRand();
    len = QuestionList.length;
  }

  function reset(any = undefined){
    QuestionList.clear();
    for(const o of questionJson){
      QuestionList.push(o, 10);
    }
    nextQ();
    
  }

  reset();

 

  

  function nextQuestion(result: boolean){
    

    if(currentQ != null){
      if(result) QuestionList.remove(currentQ);      
    }
    
    if(QuestionList.length  > 0){
      nextQ();
    }
  }
</script>

<div>
  {#if len == 0}
    <p>No questions left, you answered all of them</p>
  {:else}
    <Card Question={currentQ} Callback={nextQuestion}></Card>
  {/if}
  <button on:click={reset}>Reset ({len} remain)</button>
</div>

<style>
  div{
    height: 100%;
    width: 100%;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>