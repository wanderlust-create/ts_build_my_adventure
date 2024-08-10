import { object, string } from "yup";

const userCityDto = {
  data: object().shape({
    userId: string().required(),
    cityId: string().required(),
  }),
};
export default userCityDto;
