import { AIUsage } from '../components/AIUsage';
import { NavBar } from '../components/NavBar';

export default function AIUsagePage() {
  return (
    <>
      <NavBar current="ai-usage" />
      <main>
        <AIUsage />
      </main>
    </>
  );
}
