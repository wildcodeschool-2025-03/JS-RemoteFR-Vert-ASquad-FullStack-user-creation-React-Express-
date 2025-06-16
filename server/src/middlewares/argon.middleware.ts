import argon2 from "argon2";

export const hashPassword = async (req, res, next) => {
  const { password } = req.body;

  try {
    const hash = await argon2.hash(password);

    req.body.password = hash;

    next();
  } catch (err) {
    next(err);
  }
};
