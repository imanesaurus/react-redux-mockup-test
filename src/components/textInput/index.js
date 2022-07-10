import { ErrorMessage, Input, InputWrapper } from './input.styles';

function TextInput({
  value, onChange, placeholder, error, ...props
}) {
  return (
    <InputWrapper>
      <Input value={value} onChange={onChange} placeholder={placeholder} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}

export default TextInput;
