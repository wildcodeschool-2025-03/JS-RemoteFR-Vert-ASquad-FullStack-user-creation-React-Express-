import jwt from "jsonwebtoken";

export const login = (req, res, next) => {
  const { email } = req.body;

  const token = jwt.sign({ email, age: 17 }, process.env.APP_SECRET as string, {
    expiresIn: "36h",
  });

  res
    .cookie("auth_token", token, {
      secure: false,
      httpOnly: true,
      maxAge: "3600000",
    })
    .status(200)
    .json({
      message: "Bienvenue sur le site !",
    });
};
