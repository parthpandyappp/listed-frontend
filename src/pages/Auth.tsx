const Auth = () => {
  return (
    <main className="flex flex-col md:flex-row h-full w-full grow">
      <section className="w-full h-1/3 md:h-full md:w-2/5 bg-black flex justify-center items-center">
        <p className="text-white font-bold text-7xl">Board.</p>
      </section>
      <section className="w-full h-full flex mx-auto justify-center items-center bg-[#F5F5F5] gap-2">
        <article className="">
          <h1 className="text-3xl font-bold leading-10">Sign in</h1>
          <p className="font-normal text-base text-[#000000] leading-5 font-lato font-normal">
            Sign in to your account
          </p>
          <section className="flex gap-3 mt-6">
            <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2">
              <span>
                <img src="/assets/google-icon.png" alt="" />
              </span>
              <p className="text-xs text-[#858585]">Sign in with Google</p>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2">
              <span>
                <img src="/assets/apple-icon.png" alt="" />
              </span>
              <p className="text-xs text-[#858585]">Sign in with Apple</p>
            </button>
          </section>
          <form className="flex flex-col gap-4 mt-6 px-4 py-6 bg-white rounded-2xl">
            <span className="flex flex-col gap-1">
              <label htmlFor="" className="font-bold font-normal">
                Email address
              </label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className=" bg-[#EAEAEA] rounded-xl px-4 py-1 outline-none  font-lato font-normal"
              />
            </span>
            <span className="flex flex-col gap-1">
              <label htmlFor="" className="font-bold font-normal">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••••"
                className=" bg-[#EAEAEA] rounded-xl px-4 py-1 outline-none  font-lato font-normal"
              />
            </span>
            <p className="text-[#346BD4] cursor-pointer font-normal">
              Forgot password?
            </p>
            <button className="bg-black text-center w-full rounded-md text-white py-2">
              Sign In
            </button>
          </form>
          <p className="text-base text-center text-[#858585] font-lato font-normal">
            Don't have an account?{" "}
            <span className="text-[#346BD4] cursor-pointer">Register here</span>
          </p>
        </article>
      </section>
    </main>
  );
};

export { Auth };
