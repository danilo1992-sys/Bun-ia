import { ButtonDemo } from "./components/Button.tsx";
import { InputDemo } from "./components/input.tsx";
import { TextareaDemo } from "./components/TextArea.tsx";

export function App() {
  return (
    <>
      <div className="w-80 grid gap-2 place-self-center items-center">
        <ButtonDemo />
        <InputDemo />
        <TextareaDemo />
      </div>
    </>
  );
}

export default App;
