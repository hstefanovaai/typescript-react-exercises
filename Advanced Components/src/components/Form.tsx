import {
  ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void; // this value type will be handled in the component that uses the Form component, so we can use unknown type here. The component that uses the Form component will handle the type of the value.
};

export type FormHandler = {
  clear: () => void;
};
// export default function Form(props: FormProps) { // this works, but throws error in console for the 'onSave' prop
const Form = forwardRef<FormHandler, FormProps>(
  ({ onSave, children, ...otherProps }, propsRef) => {
    const formRef = useRef<HTMLFormElement>(null);

    useImperativeHandle(propsRef, () => {
      return {
        clear: () => {
          formRef.current?.reset();
        },
      };
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget); //build in JS (all inputs should receive a name attribute)
      const data = Object.fromEntries(formData.entries()); //convert formData to an object

      onSave(data);
    };

    return (
      <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
        {children}
      </form>
    );
  },
);

export default Form;
