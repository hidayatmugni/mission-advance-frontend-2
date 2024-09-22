import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, name, placeholder, children } = props;

  return (
    <>
      <div className="mb-2 w-full">
        <Label htmlFor={name} name={name}>
          {children}
        </Label>
        <Input type={type} name={name} placeholder={placeholder} />
      </div>
    </>
  );
};

export default InputForm;
