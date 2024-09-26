import React from "react";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Container for Login Form and Image */}
      <div className="bg-white shadow-lg w-[1600px] h-[931px] flex">
        
        {/* Left Side - Login Form */}
        <div className="w-[800px] p-[100px] flex flex-col justify-center">
          <h2 className="text-[100px] leading-[121.9px]">LOGIN</h2>
          
          {/* Login Form */}
          <form className="space-y-6 mt-8">
            <input
              type="text"
              placeholder="Username"
              className="w-full h-[62px] border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 text-[20px] font-light p-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[62px] border rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-400 text-[20px] font-light p-3"
            />
            <button className="w-[222px] h-[64px] bg-black text-white text-[25px] font-bold py-3 rounded-[10px] hover:bg-gray-800 transition">
              LOGIN
            </button>
          </form>

          {/* Divider with OR */}
          <div className="flex items-center justify-between mt-6">
            <hr className="w-[246px] border-t border-[#101A1C]" />
            <span className="text-[#101a1c] text-[25px] font-bold">OR</span>
            <hr className="w-[246px] border-t border-[#101A1C]" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-evenly mt-6">
            <img className="w-[50px]" src="/image 1.png" alt="Google" />
            <img className="w-[50px]" src="/image 2.png" alt="Facebook" />
          </div>

          {/* Sign Up Link */}
          <p className="mt-8 text-[25px] text-gray-600">
            Not yet registered,{" "}
            <a href="#" className="text-blue-500 underline">
              Click here to sign up
            </a>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-[800px] h-[931px]">
          <img
            src="/image 3.png"
            alt="Bird"
            className="h-full w-full object-cover rounded-bl-[250px] rounded-tl-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
