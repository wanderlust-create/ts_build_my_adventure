import { Model, RelationMappings } from "objection";
import { join } from "path";
import Event from "./event";
import User from "./user";

class City extends Model {
  static tableName = "city";
  readonly id!: number;
  name!: string;
  country!: string;
  createdAt?: Date;
  updatedAt?: Date;

  //optional
  event?: Event[];
  user?: User[];

  static jsonSchema = {
    type: "object",
    required: ["name", "country"],
    properties: {
      id: { type: "integer" },
      name: { type: "string", minLength: 3, maxLength: 30 },
      country: { type: "string", minLength: 3, maxLength: 30 },
    },
  };

  // will return NotFound error instead of undefined
  static query(...args: undefined[]) {
    return super.query(...args).throwIfNotFound();
  }
  static relationMappings: RelationMappings = {
    event: {
      relation: Model.HasManyRelation,
      modelClass: join(__dirname, "event"),
      join: {
        from: "event.cityId",
        to: "city.id",
      },
      filter: (query) => query.select("id", "title"),
    },
    user: {
      relation: Model.ManyToManyRelation,
      modelClass: join(__dirname, "users"),
      join: {
        from: "city.id",
        through: {
          from: "userCity.cityId",
          to: "userCity.userId",
        },
        to: "user.id",
      },
      filter: (query) => query.select("id", "firstName", "lastName"),
    },
  };
}

export default City;
