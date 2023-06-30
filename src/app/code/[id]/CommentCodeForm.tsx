"use client";
import Badge from "@/components/badge/Badge";
import CustomInput from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/interactive/CustomButton";
import LoadingLabel from "@/components/interactive/LoadingLabel";
import useAuth from "@/hooks/useAuth";
import { commentService } from "@/services/commentServices";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useParams, useRouter } from "next/navigation";
import { Dispatch } from "react";
import { FormProvider, useForm } from "react-hook-form";

type CommentCodeFormInputs = {
    message: string;
};

type CommentCodeFormProps = {
    setModalOpen: Dispatch<React.SetStateAction<boolean>>;
    codeLine: string;
    numberCodeLine: number;
};

function CommentCodeForm({
    setModalOpen,
    codeLine,
    numberCodeLine,
}: CommentCodeFormProps) {
    const methods = useForm<CommentCodeFormInputs>();
    const { auth } = useAuth();
    const { id } = useParams();

    const commentMutation = useMutation({
        mutationFn: (data: CommentCodeFormInputs) => {
            return commentService.postComment(auth.token, {
                message: data.message,
                code: Number(id),
                upvotes: 0,
                downvotes: 0,
                users_permissions_user: Number(auth.userId),
                codeLine,
                numberCodeLine,
            });
        },
        onSuccess: (response: AxiosResponse) => {
            console.log(response);
            setModalOpen(false);
        },
        onError: (error: any) => {
            console.log(error);
        },
    });

    function onSubmit(data: CommentCodeFormInputs) {
        commentMutation.mutate(data);
    }

    return (
        <>
            <div className="relative flex flex-col rounded-2xl items-center bg-white/80 gap-2">
                <Badge theme="secondary" id="comment">
                    COMMENT
                </Badge>
                <FormProvider {...methods}>
                    <form
                        className="w-full flex flex-col gap-4"
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        <span>
                            <CustomInput
                                id="message"
                                rows={4}
                                label="Comment"
                                type="textarea"
                                validations={{
                                    required: "Comment is required",
                                }}
                            />
                        </span>
                        <div className="flex gap-2">
                            <CustomButton theme="secondary">
                                <LoadingLabel
                                    message="Comment"
                                    state={commentMutation.isLoading}
                                />
                            </CustomButton>
                            <CustomButton onClick={() => setModalOpen(false)}>
                                Cancel
                            </CustomButton>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </>
    );
}

export default CommentCodeForm;
