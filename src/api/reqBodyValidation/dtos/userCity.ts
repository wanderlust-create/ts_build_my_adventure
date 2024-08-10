import { object, string } from "yup";

const userCityPostDto = {
  data: object().shape({
    userId: string().required(),
    cityId: string().required(),
  }),
};
export default userCityPostDto;
