import { object, string } from "yup";

const cityPostDto = {
  data: object().shape({
    name: string().trim().min(3).max(30).required(),
    country: string().trim().min(3).max(30).required(),
  }),
};
const cityPatchtDto = {
  data: object().shape({
    name: string().trim().min(3).max(30),
    country: string().trim().min(3).max(30),
  }),
};

export default { cityPostDto, cityPatchtDto };
