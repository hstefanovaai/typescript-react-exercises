import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Form, {FormHandler } from "./components/Form";
import { useRef } from "react";

function App() {
  const customForm = useRef<FormHandler>(null);

  function handleSubmit(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log("Form submitted with data:", extractedData);

    customForm.current?.clear(); // Clear the form after submission
  }
  return (
    <>
      <Form onSave={handleSubmit} ref={customForm}>
        <Input
          type="text"
          id="name"
          label="Name"
          placeholder="Enter your name"
        />
        <Input
          type="number"
          id="age"
          label="Age"
          placeholder="Enter your age"
        />
        <Button el="button" onClick={() => {}}>
          Click me
        </Button>
      </Form>

      {/* <div>
        <Input
          id="name"
          label="Name"
          placeholder="Enter your name"
          type="text"
        />
        <Input
          id="age"
          label="Age"
          placeholder="Enter your age"
          type="number"
        />
      </div>
      <div>
        <Button el="button" onClick={() => alert("Button clicked!")}>
          Click Me
        </Button>
        <Button el="link" href="https://www.google.com/" target="_blank">
          Go to Example.com
        </Button>
      </div>

      <Container
        as={Button}
        el="button"
        onClick={() => alert("Polymorphic button clicked!")}
      >
        Polymorphic Button
      </Container> */}
    </>
  );
}

export default App;
