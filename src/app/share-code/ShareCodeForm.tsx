"use client";
import CustomInput from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/interactive/CustomButton";
import LoadingLabel from "@/components/interactive/LoadingLabel";
import useAuth from "@/hooks/useAuth";
import { shareCode } from "@/services/codeServices";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

type ShareCodeFormInputs = {
    title: string;
    description: string;
    language: string;
    code: string;
};

function ShareCodeForm() {
    const methods = useForm<ShareCodeFormInputs>();
    const router = useRouter();
    const { auth, setAuth } = useAuth();

    const shareCodeMutation = useMutation({
        mutationFn: (data: ShareCodeFormInputs) => {
            return shareCode(auth.token, data);
        },
        onSuccess: (response: AxiosResponse) => {
            console.log(response);
            setAuth({
                userId: response.data.user.id,
                token: response.data.jwt,
                username: response.data.user.username,
            });
            router.push("/shared-codes");
        },
        onError: (error: any) => {
            console.log(error);
        },
    });

    function onSubmit(data: ShareCodeFormInputs) {
        console.log(data);
        //uncomment when code is ready
        //shareCodeMutation.mutate(data);
    }

    return (
        <>
            <div className="relative flex flex-col rounded-2xl items-center bg-white/80 gap-2">
                <h1 className="text-3xl text-black font-extrabold font-cabin">
                    Share Code!🤓
                </h1>
                <FormProvider {...methods}>
                    <form
                        className="w-full flex flex-col gap-4"
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        <span>
                            <CustomInput
                                id="title"
                                label="Title"
                                type="text"
                                validations={{
                                    required: "Title is required",
                                }}
                            />
                            <CustomInput
                                id="description"
                                label="Description"
                                type="textarea"
                                validations={{
                                    required: "Description is required",
                                }}
                            />
                            <CustomInput
                                id="language"
                                label="Language"
                                type="multiselect"
                                validations={{
                                    required: "Language is required",
                                }}
                            />
                        </span>
                        <CustomButton theme="secondary">
                            <LoadingLabel
                                message="Share Code"
                                state={shareCodeMutation.isLoading}
                            />
                        </CustomButton>
                    </form>
                </FormProvider>
            </div>
        </>
    );
}

export default ShareCodeForm;
