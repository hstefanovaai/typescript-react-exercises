import { ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void; // this value type will be handled in the component that uses the Form component, so we can use unknown type here. The component that uses the Form component will handle the type of the value.
};

// export default function Form(props: FormProps) { // this works, but throws error in console for the 'onSave' prop
export default function Form({onSave, children, ...otherProps}: FormProps) {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget); //build in JS (all inputs should receive a name attribute)
    const data = Object.fromEntries(formData.entries()); //convert formData to an object

    onSave(data);
    event.currentTarget.reset(); //reset the form after submission
  };

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
}
