import { object, string } from "yup";

const eventPostDto = {
  data: object().shape({
    cityId: string().min(1).max(30).required(),
    title: string().min(3).max(30).required(),
  }),
};

//FYI will convert req.body numbers to string
const eventPatchDto = {
  data: object().shape({
    cityId: string().min(1).max(30),
    title: string().min(3).max(30),
  }),
};

export default { eventPostDto, eventPatchDto };
