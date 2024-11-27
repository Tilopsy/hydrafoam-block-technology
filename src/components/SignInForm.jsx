// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import { apiSignIn } from "../services/auth";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import Loader from "./Loader";

// const SignInForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ reValidateMode: "onBlur", mode: "all" });

//   const onSubmit = async (data) => {
//     setIsSubmitting(true);
//     try {
//       const res = await apiSignIn({
//         email: data.email,
//         password: data.password,
//       });

//       if (res.data.accessToken && res.data.message) {
//         localStorage.setItem("accessToken", res.data.accessToken);
//         toast.success(res.data.message); 
//         navigate("/landingPage"); 
//       } else {
//         throw new Error("Invalid response from server.");
//       }
//     } catch (error) {
//       console.error("Error during sign-in:", error); 
//       toast.error("Failed to sign in. Please check your email and password."); 
//     } finally {
//       setIsSubmitting(false); 
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       <div className="flex flex-col w-full space-y-1">
//         <label htmlFor="email" className="font-semibold">
//           Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           {...register("email", { required: "Email is required" })}
//           placeholder="Enter your email"
//           className="border-2 p-2 rounded-md"
//           aria-invalid={errors.email ? "true" : "false"}
//           aria-describedby="email-error"
//         />
//         {errors.email && (
//           <p id="email-error" className="text-red-500">
//             {errors.email.message}
//           </p>
//         )}
//       </div>

//       <div className="flex flex-col w-full space-y-1">
//         <label htmlFor="password" className="font-semibold">
//           Password
//         </label>
//         <input
//           id="password"
//           type="password"
//           {...register("password", { required: "Password is required" })}
//           placeholder="Enter your password"
//           className="border-2 p-2 rounded-md"
//           aria-invalid={errors.password ? "true" : "false"}
//           aria-describedby="password-error"
//         />
//         {errors.password && (
//           <p id="password-error" className="text-red-500">
//             {errors.password.message}
//           </p>
//         )}
//       </div>

//       <button
//         type="submit"
//         className={`${
//           isSubmitting ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600"
//         } text-white w-full p-2 rounded-md font-semibold flex`}
//         disabled={isSubmitting} 
//       >
//         {isSubmitting ? <Loader /> : "Sign In"}
//       </button>

//       <div className="flex flex-col md:flex-row gap-x-2 w-full">
//         <p>Don't have an account?</p>
//         <Link to="/signup" className="underline text-pink-500 hover:text-pink-600">
//           Sign up
//         </Link>
//       </div>
//     </form>
//   );
// };

// export default SignInForm;
