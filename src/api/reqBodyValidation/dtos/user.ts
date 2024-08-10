import { object, string } from "yup";

const userDto = {
  data: object().shape({
    firstName: string().trim().required(),
    lastName: string().trim().required(),
    email: string().trim().email().required(),
  }),
};

export default userDto;
