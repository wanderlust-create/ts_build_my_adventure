import { object, string } from "yup";

const userPostDto = {
  data: object().shape({
    firstName: string().trim().min(3).max(30).required(),
    lastName: string().trim().min(3).max(30).required(),
    email: string().trim().email().required(),
  }),
};
const userPatchDto = {
  data: object().shape({
    firstName: string().trim().min(3).max(30),
    lastName: string().trim().min(3).max(30),
    email: string().trim().email(),
  }),
};

export default { userPostDto, userPatchDto };
