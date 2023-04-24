export const Header = () => {

    return (
       <header className="w-full border border-indigo-600">
        <nav className="w-full flex flex-column justify-around items-center">
            <h1 className="text-2xl text-black-500"> EasyRent </h1>
            <ul className="flex flex-column">
                <li className="mx-4"><a href="#home">Home</a></li>
                <li className="mx-4"><a href="#about">About</a></li>
                <li className="mx-4"><a href="#contact">Contact</a></li>
                <li className="mx-4"><a href="signup">Sign up</a></li>
                <li className="mx-4"><a href="login">Login</a></li>
            </ul>
        </nav>
       </header>
    );
}