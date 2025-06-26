import argon2 from "argon2";
import { RequestHandler } from "express";

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

export const comparePassword: RequestHandler = async (req, res, next) => {
  const { password, current_password } = req.body;

  try {
    const isValid = argon2.verify(current_password, password);

    if (!isValid) {
      res.status(403).json({
        message: "La combinaison email/mot de passe est incorrecte.",
      });
    }

    next();
  } catch (e) {
    next(e);
  }
};
