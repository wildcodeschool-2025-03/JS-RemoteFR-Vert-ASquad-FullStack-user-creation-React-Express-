import { RequestHandler } from "express";
import { SafeParseReturnType, z } from "zod";
import { UserType } from "../lib/definitions";

const validateUser: RequestHandler = (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  const userSchema = z.object({
    firstname: z.string().min(2, "minimum 2 caractères s'il vous pliz").max(10),
    lastname: z.string().min(2).max(10),
    email: z.string().email(),
    password: z
      .string()
      .regex(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
        "Votre mot doit contenir 1 majuscule, une minuscule, un caractère spécial..."
      ),
  });

  const validData: SafeParseReturnType<unknown, UserType> =
    userSchema.safeParse({
      firstname,
      lastname,
      email,
      password,
    });

  if (!validData.success) {
    const errors: Record<string, string> = validData.error.issues.reduce<
      Record<string, string>
    >((acc, val) => {
      //... { password : "pas assez long" }
      acc[val.path[0]] = val.message;
      return acc;
    }, {});

    res.status(401).json(errors);
    return;
  }

  next();

  // ...
};

export default validateUser;
