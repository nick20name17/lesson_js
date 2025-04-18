import { Counter } from './counter'
import { Greeting } from './greeting'
import { ItemList } from './item-list'

export const App = () => {
    const handleClick = () => {
        alert('Clicked!')
    }
    return (
        <>
            <Greeting name="Mark" />
            <Counter />
            <ItemList />
        </>
    )
}
