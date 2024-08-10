import { object, string } from "yup";

const cityDto = {
  data: object().shape({
    name: string().trim().required(),
    country: string().trim().required(),
  }),
};

export default cityDto;
