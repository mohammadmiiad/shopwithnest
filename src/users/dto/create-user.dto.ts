import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';
import { createUserAdminValidationMsg } from '../user.messages';

export const adminCreateUserSchema = z.object({
  firstName: z.string().min(1, createUserAdminValidationMsg.firstName.required),
  lastName: z.string().min(1, createUserAdminValidationMsg.lastName.required),
  email: z.string().email(createUserAdminValidationMsg.email.invalid),
  password: z.string().min(6, createUserAdminValidationMsg.password.minLength),
  mobile: z
    .string()
    .min(11, createUserAdminValidationMsg.mobile.length)
    .max(11, createUserAdminValidationMsg.mobile.length),
  role: z.enum(['USER']).default('USER'),
  walletBalance: z.number().default(0),
  nationalCode: z
    .string()
    .length(10, createUserAdminValidationMsg.nationalCode.length),
  birthDate: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      createUserAdminValidationMsg.birthDate.invalidFormat,
    ),
  shebaNumber: z
    .string()
    .length(24, createUserAdminValidationMsg.shebaNumber.length),
  refundType: z.enum(['cash', 'rozcart']).default('rozcart'),
});

export class AdminCreateUserDto extends createZodDto(adminCreateUserSchema) {}
