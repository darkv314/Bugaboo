"use client";
import CustomInput from "@/components/formComponents/CustomInput";
import { cabin } from "@/styles/fonts";
import { FormProvider, useForm } from "react-hook-form";

type LoginFormInputs = {
    username: string;
    password: string;
};

function LoginForm() {
    const methods = useForm<LoginFormInputs>();
    return (
        <div className="flex flex-col shadow-lg rounded-lg items-center bg-white">
            <h1 className="text-2xl text-black font-extrabold font-cabin">
                Login
            </h1>
            <FormProvider {...methods}>
                <form>
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
                </form>
            </FormProvider>
        </div>
    );
}

export default LoginForm;
