import Input from "../components/Input";
import authImg from "../assets/images/authbg.png";
import logoImg from "../assets/images/Logo-black.png";
import Button from "../components/Button";

const AuthPage = () => {
  return (
    <div className="flex max-sm:flex-col items-center lg:h-[100vh] w-[100vw] max-md:gap-8">
      <div className="relative lg:w-1/2 h-[70vh] md:h-full overflow-hidden flex justify-center items-center pb-4">
        <img src={authImg} alt="sign up image" className="w-full" />
        <img src={logoImg} alt="logo" className="absolute top-10" />
      </div>
      {/*  */}
      <div className="flex flex-col gap-y-8 px-14 max-md:px-8 max-md:pb-10 lg:w-2/5 w-full h-full justify-center">
        <div className="flex flex-col gap-y-6">
          <h4 className="text-neutral7 font-poppins font-medium text-4xl">
            Sign Up
          </h4>
          <p className="text-base text-neutral4 flex gap-2">
            Already have an account?{" "}
            <span className="text-greenHue">Sign in</span>
          </p>
        </div>
        <div className=" flex flex-col gap-y-8 justify-center">
          <Input type={"text"} placeholder={"Your name"} />
          <Input type={"text"} placeholder={"Your username"} />
          <Input type={"email"} placeholder={"Your email address"} />
          <Input type={"password"} placeholder={"Your password"} />
          <span className="flex items-center gap-x-3">
            <span>
              <Input type={"checkbox"} />
            </span>

            <p className="text-sm font-medium text-neutral4">
              I agree with <a className="text-neutral7">Privacy policy</a> and{" "}
              <a className="text-neutral7">Terms of Use</a>
            </p>
          </span>
        </div>
        <Button content={"Sign up"} />
      </div>
    </div>
  );
};

export default AuthPage;
