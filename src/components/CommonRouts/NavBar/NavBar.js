
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
import CustomLink from "../CustomLink";


export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }

    console.log(user);
    return (
        <>
            <nav className="shadow-lg sticky sticky-top bg-gray-50 relative flex flex-wrap items-center justify-between px-2 py-3  mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <CustomLink to='/' className=" font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-myBlue hover:text-myYellow">
                            Beautiful Bangladesh
                        </CustomLink>


                        <button
                            className="text-myBlue hover:text-myYellow cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {/* Responsive bar */}
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sliders-h" className="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z"></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                            {/* checkout */}
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-myBlue "

                                    to='/checkout'>
                                    <span className="ml-2 hover:text-myYellow ">Checkout</span>
                                </CustomLink>
                            </li>


                            {/* Blogs */}
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-myBlue "

                                    to='/blogs'>
                                    <span className="ml-2 hover:text-myYellow ">Blogs</span>
                                </CustomLink>
                            </li>

                            {/* about me */}
                            <li className="nav-item">
                                <CustomLink
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-myBlue "

                                    to='/aboutme'>
                                    <span className="ml-2 hover:text-myYellow ">AboutMe</span>
                                </CustomLink>
                            </li>


                            {
                                user ?
                                    <li className="nav-item">
                                        <CustomLink
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-myBlue ml-2 hover:text-myYellow " to=''>
                                            {user.email || user.displayName || 'Welcome User'}
                                        </CustomLink>
                                    </li>
                                    :
                                    <li className="nav-item">
                                        <CustomLink
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-myBlue "

                                            to='/register'>
                                            <span className="ml-2 hover:text-myYellow ">Register</span>
                                        </CustomLink>
                                    </li>

                            }
                            {
                                user ? <li className="nav-item">

                                    <Link onClick={handleLogOut}
                                        className="hover:text-myYellow ml-2  px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-myBlue "

                                        to='/'> Logout
                                    </Link>
                                </li>
                                    :
                                    <li className="nav-item">

                                        <CustomLink
                                            className="ml-2  px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-myBlue "

                                            to='/login'> <span className="hover:text-myYellow">Login</span>
                                        </CustomLink>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}