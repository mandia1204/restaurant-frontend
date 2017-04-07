import { ValidationRules } from 'aurelia-validation';

const LoginRules = () => {
  return ValidationRules
    .ensure(a => a.userName).required().minLength(3).maxLength(10)
    .ensure(a => a.password).required().minLength(3).maxLength(10)
    .rules;
};

export default LoginRules;
