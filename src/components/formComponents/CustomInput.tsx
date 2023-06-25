import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IconoirProvider, EyeEmpty, EyeOff } from "iconoir-react";
import ErrorMessage from "./ErrorMessage";
import Select from "react-select";
import { options } from "./data";

type MainInputProps = {
    id: string;
    label: string;
    type: string;
    value?: string;
    validations?: {
        required?: string;
        pattern?: {
            value: RegExp;
            message: string;
        };
    };
};

type InputProps = {
    id: string;
    validations?: {
        required?: string;
        pattern?: {
            value: RegExp;
            message: string;
        };
    };
    type?: string;
    value?: string;
};

function Input({ id, label, type, validations, value = "" }: MainInputProps) {
    const {
        formState: { errors },
    } = useFormContext();

    return (
        <div className="flex flex-col gap-1">
            <label className="font-lato" htmlFor={id}>
                {label}
            </label>
            {type === "password" ? (
                <PasswordInput id={id} validations={validations} />
            ) : type === "textarea" ? (
                <AreaInput id={id} validations={validations} />
            ) : type === "multiselect" ? (
                <SelectInput id={id} />
            ) : (
                <TextInput
                    id={id}
                    validations={validations}
                    value={value}
                    type={type}
                />
            )}
            <ErrorMessage errors={errors[id]} />
        </div>
    );
}

function AreaInput({ id, validations }: InputProps) {
    const { register } = useFormContext();
    return (
        <textarea
            className="border border-black rounded-lg p-3 font-lato"
            // name={id}
            id={id}
            cols={40}
            rows={10}
            // value={value}
            {...register(id, validations)}
            // placeholder={inside}
            // onChange={(e) => {
            //     setChanged(true);
            //     setValue(e.target.value);
            // }}
        ></textarea>
    );
}

function SelectInput({ id, validations }: InputProps) {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <div>
            <Controller
                name={id}
                control={control}
                rules={validations}
                render={({ field }) => (
                    <Select
                        {...field}
                        isMulti
                        options={options}
                        value={field.value}
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderColor: "black",
                                borderWidth: "1px",
                                fontFamily: "Lato",
                            }),
                        }}
                        // onChange={(selectedOption) =>
                        //     field.onChange(selectedOption.value)
                        // }
                    />
                )}
            />
            <ErrorMessage errors={errors[id]} />
        </div>
    );
}

function TextInput({ id, validations, value, type }: InputProps) {
    const { register } = useFormContext();
    return (
        <input
            className="border border-black rounded-full py-1 px-3 font-lato"
            type={type}
            {...register(id, validations)}
            defaultValue={value}
        />
    );
}

function PasswordInput({ id, validations }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const { register } = useFormContext();
    return (
        <div className="flex">
            <input
                className="font-lato w-full rounded-s-full border-t border-l border-b border border-black border-collapse py-1 px-3"
                type={showPassword ? "text" : "password"}
                {...register(id, validations)}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-2 grid place-items-center border border-black rounded-r-full"
            >
                <IconoirProvider>
                    {showPassword ? <EyeEmpty /> : <EyeOff />}
                </IconoirProvider>
            </button>
        </div>
    );
}

export default Input;
