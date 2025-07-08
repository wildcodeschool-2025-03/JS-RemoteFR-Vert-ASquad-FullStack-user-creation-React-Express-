import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.cookies.auth_token,
      process.env.APP_SECRET as string
    );

    req.body.decode = decode;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

const checkAge = (req, res, next) => {
  if (req.body.decode.age > 18) {
    next();
  } else {
    res.sendStatus(401);
  }
};

export { checkAuth, checkAge };
