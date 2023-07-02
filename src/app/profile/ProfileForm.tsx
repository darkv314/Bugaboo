"use client";
import CustomInput from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/interactive/CustomButton";
import LoadingLabel from "@/components/interactive/LoadingLabel";
import { AuthContextType } from "@/context/AuthProvider";
import { EMAIL_CHECK } from "@/helpers/regex";
import useAuth from "@/hooks/useAuth";
import { userService } from "@/services/userServices";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

type ProfileFormInputs = {
    email: string;
    username: string;
    currentPassword: string;
    password: string;
    confirmPassword: string;
};

function ProfileForm() {
    const methods = useForm<ProfileFormInputs>();
    const { auth, setAuth } = useAuth();
    const router = useRouter();

    function onSubmit(data: ProfileFormInputs) {
        profileMutation.mutate(data);
    }

    const profileMutation = useMutation({
        mutationFn: (data: ProfileFormInputs) => {
            return userService.updateUser(
                data,
                Number(auth.userId),
                auth.token
            );
        },
        onSuccess: (response) => {
            console.log(response);
            setAuth((prev: AuthContextType) => {
                return {
                    ...prev,
                    userId: response.id,
                    email: response.email,
                    username: response.username,
                };
            });
            router.push("/shared-codes");
        },
        onError: (error: any) => {
            console.log(error);
        },
    });
    return (
        <div className="relative flex flex-col rounded-2xl items-center bg-white/80 w-5/6 xs:w-7/12 sm:w-1/2 md:w-2/5 lg:w-[32%] m-4 py-12 px-12 gap-2">
            <h1 className="text-3xl text-black font-extrabold font-cabin">
                Profile
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
                            value={auth.email}
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
                            value={auth.username}
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
                            id="currentPassword"
                            label="Current password"
                            type="password"
                            validations={
                                {
                                    // required: "Password is required",
                                }
                            }
                        />
                        <CustomInput
                            id="password"
                            label="New password"
                            type="password"
                            validations={{
                                // required: "Password is required",
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
                            validations={
                                {
                                    // required: "Confirm Password is required",
                                }
                            }
                        />
                    </span>
                    <CustomButton theme="secondary">
                        <LoadingLabel
                            message="Update Profile"
                            state={profileMutation.isLoading}
                        />
                    </CustomButton>
                </form>
            </FormProvider>
            <span className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-2xl -z-10 login-card hidden xs:block"></span>
        </div>
    );
}

export default ProfileForm;