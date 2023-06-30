"use client";
import CustomInput from "@/components/formComponents/CustomInput";
import CustomButton from "@/components/interactive/CustomButton";
import LoadingLabel from "@/components/interactive/LoadingLabel";
import useAuth from "@/hooks/useAuth";
import { codeService } from "@/services/codeServices";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { UserI } from "@/models/user";

type ShareCodeFormInputs = {
  title: string;
  description: string;
  language: string;
  code: string;
  users_permissions_user: number
  createdAt: string;
};

function ShareCodeForm() {
  const methods = useForm<ShareCodeFormInputs>();
  const router = useRouter();
  const { auth, setAuth } = useAuth();
  const [code, setCode] = useState<string>("");

  const shareCodeMutation = useMutation({
    mutationFn: (data: ShareCodeFormInputs) => {
      return codeService.postCode(auth.token, data);
    },
    onSuccess: (response: AxiosResponse) => {
      console.log(response);
      router.push("/shared-codes");
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  function onSubmit(data: ShareCodeFormInputs) {
    data.code = code;
    data.users_permissions_user = Number(auth.userId);
    //
    console.log(data);

    //uncomment when code is ready
    shareCodeMutation.mutate(data);
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
              {/* <CustomInput
                id="language"
                label="Language"
                type="multiselect"
                validations={{
                  required: "Language is required",
                }}
              /> */}
            </span>
            <CodeMirror
              height="400px"
              theme={"dark"}
              onChange={(value) => {
                setCode(value);
              }}
              extensions={[javascript()]}
              placeholder={"// Enter your code here"}
            />
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
