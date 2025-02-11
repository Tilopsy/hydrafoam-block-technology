// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import { apiCheckUsernameExists, apiSignUp } from "../services/auth";
// import { toast } from "react-toastify";
// import Loader from "./Loader";
// import { debounce } from "lodash";

// const SignUpForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [usernameAvailable, setUsernameAvailable] = useState(false);
//   const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
//   const [isUsernameLoading, setIsUsernameLoading] = useState(false);
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({ reValidateMode: "onBlur", mode: "all" });

//   const checkUserName = async (userName) => {
//     setIsUsernameLoading(true);
//     try {
//       const res = await apiCheckUsernameExists(userName);
//       console.log(res.data);
//       const user = res.data.user;
//       if (user) {
//         setUsernameNotAvailable(true);
//         setUsernameAvailable(false);
//       } else {
//         setUsernameAvailable(true);
//         setUsernameNotAvailable(false);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("An error occured!");
//     } finally {
//       setIsUsernameLoading(false);
//     }
//   };

//   const userNameWatch = watch("userName");

//   useEffect(() => {
//     const debouncedSearch = debounce(async () => {
//       if (userNameWatch) {
//         await checkUserName(userNameWatch);
//       }
//     }, 1000);

//     debouncedSearch();

//     return () => {
//       debouncedSearch.cancel();
//     };
//   }, [userNameWatch]);

//   const onSubmit = async (data) => {
//     console.log(data);
//     setIsSubmitting(true);
//     let payload = {
//       firstName: data.firstName,
//       lastName: data.lastName,
//       userName: data.userName,
//       password: data.password,
//       email: data.email,
//       confirmedPassword: data.password,
//     };
//     if (data.otherNames) {
//       payload = { ...payload, otherNames: data.otherNames };
//     }
//     try {
//       const res = await apiSignUp(payload);
//       console.log(res.data);
//       toast.success(res.data.message);
//       navigate("/SIgnIn");
//     } catch (error) {
//       console.log(error);
//       toast.error("An error occured!");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
//       <div className="flex gap-x-5">
//         <div className="flex flex-col w-full space-y-1">
//           <label htmlFor="firstName" className="font-semibold">
//             Firstname
//           </label>
//           <input
//             id="firstName"
//             type="text"
//             placeholder="Enter your first name"
//             className=" border-2 p-2 rounded-md"
//             {...register("firstName", {
//               required: "First name is required",
//               minLength: {
//                 value: 2,
//                 message: "length must be more than 2 characters",
//               },
//             })}
//           />
//           {errors.firstName && (
//             <p className="text-red-500">{errors.firstName.message}</p>
//           )}
//         </div>

//         <div className="flex flex-col w-full space-y-1">
//           <label htmlFor="lastName" className="font-semibold">
//             Lastname
//           </label>
//           <input
//             id="lastName"
//             type="text"
//             placeholder="Enter your lastname"
//             className=" border-2 p-2 rounded-md"
//             {...register("lastName", {
//               required: "Last name is required",
//               minLength: {
//                 value: 2,
//                 message: "length must be more than 2 characters",
//               },
//             })}
//           />
//           {errors.lastName && (
//             <p className="text-red-500">{errors.lastName.message}</p>
//           )}
//         </div>
//       </div>
//       <div className="flex gap-x-5">
//         <div className="flex flex-col w-full space-y-1">
//           <label htmlFor="otherNames" className="font-semibold">
//             Other Names
//           </label>
//           <input
//             id="otherNames"
//             type="text"
//             placeholder="Enter your other names"
//             className=" border-2 p-2 rounded-md"
//             {...register("otherNames")}
//           />
//         </div>

//         <div className="flex flex-col w-full space-y-1">
//           <label htmlFor="userName" className="font-semibold">
//             Username
//           </label>
//           <input
//             id="userName"
//             type="text"
//             placeholder="Enter your username"
//             className=" border-2 p-2 rounded-md"
//             {...register("userName", {
//               required: "User name is required",
//               minLength: {
//                 value: 2,
//                 message: "length must be more than 2 characters",
//               },
//             })}
//           />
//           {errors.userName && (
//             <p className="text-red-500">{errors.userName.message}</p>
//           )}
//           <div className="flex gap-x-2">
//             {isUsernameLoading && <Loader />}
//             {usernameAvailable && (
//               <p className="text-green-500">Username is available!</p>
//             )}
//             {usernameNotAvailable && (
//               <p className="text-red-500">Username is already taken!</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col w-full space-y-1">
//         <label htmlFor="email" className="font-semibold">
//           Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           placeholder="Enter your email"
//           className=" border-2 p-2 rounded-md"
//           {...register("email", { required: "Email is required" })}
//         />
//         {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//       </div>

//       <div className="flex flex-col w-full space-y-1">
//         <label htmlFor="password" className="font-semibold">
//           Password
//         </label>
//         <input
//           id="password"
//           type="password"
//           placeholder="Enter your password"
//           className="border-2 p-2 rounded-md"
//           {...register("password", {
//             required: "Password is required",
//             minLength: {
//               value: 8,
//               message: "Password length must be more than 8 characters",
//             },
//           })}
//         />
//         {errors.password && (
//           <p className="text-red-500">{errors.password.message}</p>
//         )}
//       </div>
//       <button
//         type="submit"
//         className="bg-pink text-white w-full p-2 rounded-md font-semibold"
//       >
//         {isSubmitting ? <Loader /> : "Signup"}
//       </button>
//       <div className="flex gap-x-2 w-full">
//         <p>Already have an account?</p>
//         <Link to="/signin" className="underline">
//           SignIn
//         </Link>
//       </div>
//     </form>
//   );
// };

// export default SignUpForm;