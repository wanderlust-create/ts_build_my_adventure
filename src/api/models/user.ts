import { Model, RelationMappings } from "objection";
import { join } from "path";

class User extends Model {
  static tableName = 'user';
  readonly id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  createdAt?: Date
}

export default User;