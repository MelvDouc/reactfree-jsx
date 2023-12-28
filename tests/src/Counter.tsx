import { obs } from "reactfree-jsx";

export default function Counter() {
  const countObs = obs(0);
  return (
    <div>
      <p>Count: {countObs}</p>
      <button onclick={() => countObs.value++}>+</button>
    </div>
  );
}