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

  async readByEmail(email: string) {
    return await databaseClient.query(
      "SELECT firstname FROM user WHERE email=?",
      [email]
    );
  }
}

export default new UserRepository();
