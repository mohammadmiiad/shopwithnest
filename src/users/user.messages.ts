const createUserAdminValidationMsg = {
  firstName: {
    required: 'نام الزامی است.',
  },
  lastName: {
    required: 'نام خانوادگی الزامی است.',
  },
  email: {
    invalid: 'ایمیل معتبر نیست. لطفاً یک ایمیل صحیح وارد کنید.',
  },
  password: {
    minLength: 'رمز عبور باید حداقل ۶ کاراکتر باشد.',
  },
  mobile: {
    length: 'شماره همراه باید ۱۱ رقم باشد.',
  },
  nationalCode: {
    length: 'کدملی باید ۱۰ رقم باشد.',
  },
  birthDate: {
    invalidFormat: 'تاریخ تولد باید به فرمت YYYY-MM-DD باشد.',
  },
  shebaNumber: {
    length: 'شماره شبا باید ۲۴ رقم باشد.',
  },
};

export { createUserAdminValidationMsg };
