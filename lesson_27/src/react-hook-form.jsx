import { useForm } from 'react-hook-form'

export const ReactHookForm = () => {
    const form = useForm({
        defaultValues: {
            name: '',
        },
        mode: 'all',
    })

    const onSubmit = (data) => {
        console.log(data)
        form.reset()
    }

    return (
        <form
            className="p-10 space-x-2"
            onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-2">
                <input
                    className="border-2 border-black rounded-md p-2"
                    type="text"
                    placeholder="Enter your name"
                    {...form.register('name', {
                        required: 'Please enter your name',
                        minLength: {
                            value: 3,
                            message: 'Name must be at least 3 characters',
                        },
                    })}
                />
                {form.formState.errors.name ? (
                    <span className="text-red-500">
                        {form.formState.errors.name.message}
                    </span>
                ) : null}
            </div>
            <button
                className="bg-blue-500 rounded-md p-2 text-white cursor-pointer"
                type="submit">
                Submit
            </button>
            {form.formState.isSubmitSuccessful ? (
                <span
                    className="text-green-500 bg-green-500/15 p-2 rounded-md flex items-center jcc
                ">
                    Form submitted successfully!
                </span>
            ) : null}
        </form>
    )
}
