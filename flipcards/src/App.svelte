<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Card from './Card.svelte';
  import questionJson from "../../questions.json";
  import ProbList from './ProbList';

  type Question = {
    q: string, id: number, a: string
  }

  const QuestionList: ProbList<Question> = new ProbList(); 
  let currentQ: Question

  let cQ: string;
  let cA: string;

  for(const o of questionJson){
    QuestionList.push(o, 10);
  }

  currentQ = QuestionList.getRand();
  cQ = currentQ.q;
  cA = currentQ.a;

  function nextQuestion(result: boolean){
    if(currentQ != null){
      const factor = result ? 0.5: 1.5
      QuestionList.getItem(currentQ).Weight *= factor
    }
    currentQ = QuestionList.getRand();
    cQ = currentQ.q;
    cA = currentQ.a;
    
  }
</script>

<main>
  <Card Question={cQ} Answer={cA} Callback={nextQuestion}></Card>
</main>

<style>
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