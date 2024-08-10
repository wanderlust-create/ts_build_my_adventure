import { object, string } from "yup";

const eventDto = {
  data: object().shape({
    cityId: string().required(),
    title: string().required(),
  }),
};

export default eventDto;
