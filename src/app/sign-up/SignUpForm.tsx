"use client";
import CustomInput from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/interactive/CustomButton";
import { EMAIL_CHECK } from "@/helpers/regex";
import { FormProvider, useForm } from "react-hook-form";

type SignUpFormInputs = {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
};

function SignUpForm() {
    const methods = useForm<SignUpFormInputs>();
    function onSubmit(data: SignUpFormInputs) {
        console.log(data);
    }
    return (
        <div className="relative flex flex-col rounded-2xl items-center bg-white/80 w-5/6 xs:w-7/12 sm:w-1/2 md:w-2/5 lg:w-[32%] m-4 py-12 px-12 gap-2">
            <h1 className="text-3xl text-black font-extrabold font-cabin">
                Sign Up
            </h1>
            <FormProvider {...methods}>
                <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <span>
                        <CustomInput
                            id="email"
                            label="Email"
                            type="text"
                            validations={{
                                required: "Email is required",
                                pattern: {
                                    value: EMAIL_CHECK,
                                    message: "Invalid email",
                                },
                            }}
                        />
                        <CustomInput
                            id="username"
                            label="Username"
                            type="text"
                            validations={{
                                required: "Username is required",
                                minLength: {
                                    value: 4,
                                    message:
                                        "Username must be at least 4 characters long",
                                },
                            }}
                        />
                        <CustomInput
                            id="password"
                            label="Password"
                            type="password"
                            validations={{
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters long",
                                },
                            }}
                        />
                        <CustomInput
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            validations={{
                                required: "Confirm Password is required",
                            }}
                        />
                    </span>
                    <CustomButton theme="secondary">Sign Up</CustomButton>
                </form>
            </FormProvider>
            <span className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-2xl -z-10 login-card hidden xs:block"></span>
        </div>
    );
}

export default SignUpForm;
