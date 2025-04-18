import { ReactHookForm } from './react-hook-form'

export const App = () => {
    const handleClick = () => {
        alert('Clicked!')
    }
    return (
        <>
            {/* <Greeting name="Mark" />
            <Counter />
            <ItemList /> */}
            {/* <Form /> */}
            <ReactHookForm />
        </>
    )
}
