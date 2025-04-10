import ExampleCounter from "./ExampleCounter";

function CounterManager({ start, reset, onResetHandled, onTimeout }) {
  return (
    <div>
      <ExampleCounter
        initialValue={10}
        timeOut={onTimeout}
        start={start}
        reset={reset}
        onResetHandled={onResetHandled}
        onStop={() => console.log("Contador detenido")}
      />
    </div>
  );
}

export default CounterManager;
