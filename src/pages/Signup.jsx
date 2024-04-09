import React from "react";

const Signup = () => {
  return (
    <>
      <div className="border">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Sign up to Dribbble</h1>
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border rounded-lg px-4 py-3 hover:outline hover:outline-seconday-50 focus:border-seconday-400 focus:outline focus:outline-4 focus:outline-seconday-50"
                />
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="border rounded-lg px-4 py-3 hover:outline hover:outline-seconday-50 focus:border-seconday-400 focus:outline focus:outline-4 focus:outline-seconday-50"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border rounded-lg px-4 py-3 hover:outline hover:outline-seconday-50 focus:border-seconday-400 focus:outline focus:outline-4 focus:outline-seconday-50"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border rounded-lg px-4 py-3 hover:outline hover:outline-seconday-50 focus:border-seconday-400 focus:outline focus:outline-4 focus:outline-seconday-50"
                  placeholder="6+ characters"
                />
              </div>
              <div>
                <input type="checkbox" name="terms" id="terms" className="border bg-seconday-900" />
                <label htmlFor="terms">
                  Creating an account means you are okay with our Terms of
                  Service, Private Policy and our default Notification Settings
                </label>
              </div>
              <button
                type="submit"
                className="border border-transparent rounded-lg px-10 py-2 bg-seconday-900 text-white"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
