export const Register = () => {
    return (
        <form action="" className="p-10 bg-[#E7E7E7] flex flex-wrap w-1/3 justify-between align-center " >

            <article className="w-screen text-center">
                <h1 className="text-4xl p-4"> Register </h1>
                <p>Already have an account ? <a class="color-#CC6200" href="login">Login</a></p>
            </article>

            <article className="flex w-6/12	p-4 space-y-4 flex-col ">
                <label htmlFor="first-name">First Name:</label>
                <input className="p-2" type="text" name="first-name" />

                <label htmlFor="email">Email address:</label>
                <input className="p-2" type="text" name="email" />

                <label htmlFor="password">Password:</label>
                <input className="p-2" type="password" name="password" />

                <label htmlFor="city">City:</label>
                <input className="p-2" type="text" name="city" />

                <label htmlFor="profile-picture">Profile Picture:</label>
                <input className="p-2" type="file" name="profile-picture" />
            </article>

            <article className="flex w-6/12 p-4  space-y-4 flex-col">
            <label htmlFor="last-name">Last Name:</label>
            <input className="p-2" type="text" name="last-name" />

            <label htmlFor="phone-number">Phone number:</label>
            <input className="p-2" type="phone" name="phone-number" />

            <label htmlFor="verify-password">Verify Password:</label>
            <input className="p-2" type="password" name="verify-password" />

            <label htmlFor="full-address">Full Address:</label>
            <input className="p-2" type="text" name="full-address" />

            <label htmlFor="government-id">Id:</label>
            <input className="p-2" type="number" name="id" />

            </article>

            <article className="flex flex-col p-4 space-y-4 w-screen">
                <label className="w-6/12 mx-auto" htmlFor="driving-license">Driving License:</label>
                <input className="w-6/12 mx-auto" type="file" name="driving-license" />
                <button className="p-3 w-6/12 mx-auto color-black bg-[#CC6200]" type="submit">Register</button>
            </article>
        </form>
    );
}