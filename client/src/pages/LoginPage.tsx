import client from "../services/client";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function LoginPage() {
  type FormDataType = {
    email: string;
    password: string;
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormDataType>();

  const navigate = useNavigate();

  const handleForm = async (data: FormDataType) => {
    try {
      const response = await client.post(`/auth/login`, data);

      console.log(response);

      setTimeout(() => {
        toast.success(
          response.data.message + " Vous allez être redirigé dans 2 secondes"
        );
        navigate("/connected");
      }, 2000);
    } catch (e: any) {
      console.log(e);

      toast.error(e.response.data.message);
    }
  };

  return (
    <div className="flex flex-col justify-center h-[80vh] p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <form onSubmit={handleSubmit(handleForm)}>
          <div className="space-y-6">
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
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
                {...register("password", {
                  required: "Password is required",
                })}
                name="password"
                type="password"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
              {errors?.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <NavLink
          to="/register"
          className={
            "block w-full text-center mt-8 text-blue-500 underline underline-offset-4"
          }
        >
          No account yet ?
        </NavLink>
      </div>
    </div>
  );
}
