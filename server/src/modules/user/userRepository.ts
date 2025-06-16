import { FieldPacket, ResultSetHeader } from "mysql2";
import databaseClient from "../../../database/client";
import { UserType } from "../../lib/definitions";

class UserRepository {
  async create(user: UserType) {
    const { firstname, lastname, email, password } = user;

    const [result]: [ResultSetHeader, FieldPacket[]] =
      await databaseClient.query(
        "INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?,?)",
        [firstname, lastname, email, password]
      );

    return result.insertId as number;
  }
}

export default new UserRepository();
