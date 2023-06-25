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
    return (
        <div className="flex flex-col shadow-2xl rounded-2xl items-center bg-white/100 w-full sm:w-1/2 md:w-1/5 m-4 py-12 px-10 gap-2">
            <h1 className="text-3xl text-black font-extrabold font-cabin">
                Login
            </h1>
            <FormProvider {...methods}>
                <form className="w-full flex flex-col gap-4">
                    <span>
                        <CustomInput
                            id="email"
                            label="Email"
                            type="text"
                            validations={{
                                required: "Username is required",
                                pattern: {
                                    value: EMAIL_CHECK,
                                    message: "Invalid email",
                                },
                            }}
                        />
                        <CustomInput
                            id="password"
                            label="Password"
                            type="password"
                            validations={{
                                required: "Password is required",
                            }}
                        />
                    </span>
                    <CustomButton theme="secondary">Login</CustomButton>
                </form>
            </FormProvider>
        </div>
    );
}

export default SignUpForm;
