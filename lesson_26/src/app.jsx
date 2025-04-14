import { Button } from './components/button'

export const App = () => {
    return (
        <div>
            <h1 className="title">Hello</h1>
            <Button
                variant="outline"
                onClick={() => alert(1)}>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.33325 2H14.0922C14.2763 2 14.4256 2.14924 14.4256 2.33333C14.4256 2.39134 14.4104 2.44835 14.3816 2.49871L11.9999 6.66667L14.3816 10.8346C14.4729 10.9945 14.4174 11.1981 14.2576 11.2894C14.2072 11.3182 14.1502 11.3333 14.0922 11.3333H2.66659V14.6667H1.33325V2Z"
                        fill="#FF2937"
                    />
                </svg>
                Button
            </Button>
        </div>
    )
}
