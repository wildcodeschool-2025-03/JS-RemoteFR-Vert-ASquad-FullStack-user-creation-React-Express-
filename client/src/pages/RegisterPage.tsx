import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { toast } from "react-toastify";

export default function RegisterPage() {
  type FormData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirm_password?: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const handleForm = async (data: FormData) => {
    delete data.confirm_password;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/register`,
        data
      );

      toast.success(response.data.message);
    } catch (e: any) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  };

  return (
    <div className="flex flex-col justify-center p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="firstname"
                className="text-slate-900 text-sm font-medium mb-2 block"
              >
                Firstname
              </label>
              <input
                {...register("firstname", {
                  required: {
                    value: true,
                    message: "Merci de remplir ce champ",
                  },
                  minLength: {
                    value: 4,
                    message: "Le champ doit contenir au minimum 4 caractères",
                  },
                  maxLength: {
                    value: 50,
                    message: "Le champ doit contenir au maximum 50 caractères",
                  },
                })}
                name="firstname"
                type="text"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="John"
              />
            </div>
            {errors?.firstname && (
              <span className="text-red-500">{errors.firstname.message}</span>
            )}
            <div>
              <label
                htmlFor="lastname"
                className="text-slate-900 text-sm font-medium mb-2 block"
              >
                Lastname
              </label>
              <input
                {...register("lastname", {
                  required: {
                    value: true,
                    message: "Merci de remplir ce champ",
                  },
                  minLength: {
                    value: 4,
                    message: "Le champ doit contenir au minimum 4 caractères",
                  },
                  maxLength: {
                    value: 50,
                    message: "Le champ doit contenir au maximum 50 caractères",
                  },
                })}
                name="lastname"
                type="text"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Doe"
                required
                minLength={4}
              />
              {errors?.lastname && (
                <span className="text-red-500">{errors.lastname.message}</span>
              )}
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                    message: "le format d'email n'est pas celui attendu.",
                  },
                })}
                name="email"
                type="text"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="john@doe.com"
              />
              {errors?.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Password
              </label>
              <input
                {...register("password")}
                name="password"
                type="password"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Confirm Password
              </label>
              <input
                {...register("confirm_password", {
                  validate: (value) => {
                    if (value !== watch("password")) {
                      return "Les mots de passe ne correspondent pas";
                    }
                  },
                })}
                name="confirm_password"
                type="password"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Confirm password"
              />
            </div>
            {errors?.confirm_password && (
              <span className="text-red-500">
                {errors.confirm_password.message}
              </span>
            )}
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
            >
              Create an account
            </button>
          </div>
        </form>
        <NavLink
          to="/login"
          className={
            "block w-full text-center mt-8 text-blue-500 underline underline-offset-4"
          }
        >
          Already have an account ?
        </NavLink>
      </div>
    </div>
  );
}
