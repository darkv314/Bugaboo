"use client";
import CustomInput from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/interactive/CustomButton";
import { cabin } from "@/styles/fonts";
import { FormProvider, useForm } from "react-hook-form";

type LoginFormInputs = {
    username: string;
    password: string;
};

function LoginForm() {
    const methods = useForm<LoginFormInputs>();
    return (
        <div className="flex flex-col shadow-2xl rounded-2xl items-center bg-white w-full sm:w-1/2 md:w-1/5 m-4 py-12 px-10 gap-2">
            <h1 className="text-3xl text-black font-extrabold font-cabin">
                Login
            </h1>
            <FormProvider {...methods}>
                <form className="w-full flex flex-col gap-4">
                    <span>
                        <CustomInput
                            id="username"
                            label="Username"
                            type="text"
                            validations={{
                                required: "Username is required",
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

export default LoginForm;
