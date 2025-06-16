import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center sm:h-screen p-4">
        <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
          <form>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="firstname"
                  className="text-slate-900 text-sm font-medium mb-2 block"
                >
                  Firstname
                </label>
                <input
                  name="firstname"
                  type="text"
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="text-slate-900 text-sm font-medium mb-2 block"
                >
                  Lastname
                </label>
                <input
                  name="lastname"
                  type="text"
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Doe"
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="john@doe.com"
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div className="mt-12">
              <button
                type="button"
                className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
