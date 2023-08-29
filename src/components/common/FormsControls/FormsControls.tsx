import { Field } from "redux-form";

export const createField = (
  placeholder: string,
  name: string,
  validators: any,
  component: any,
  props: any = {},
  text: string = ''

) => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      />
      ;
      {text}
    </div>
  );
};
