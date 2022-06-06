import React from 'react';
import { toast, ToastContainer } from 'react-toastify';


const Checkout = () => {

    const handleBoook = (e) => {
        e.preventDefault();
        toast('Thank you for booking...!!!')
    }
    return (
        <div className=''>
            <div class="block mx-auto my-7 p-6 rounded-lg shadow-lg bg-white max-w-md">
                <form>
                    {/* Name */}
                    <div class="form-group mb-6">
                        <input required type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                            placeholder="Name" />
                    </div>


                    {/* Email */}
                    <div class="form-group mb-6">
                        <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Email address" />
                    </div>
                    {/* Phone */}
                    <div class="form-group mb-6">
                        <input required type="number" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone"
                            placeholder="Phone Number" />
                    </div>

                    {/* Travel Plan Name */}
                    <div class="form-group mb-6">
                        <input type="text" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Tour plan name" />
                    </div>

                    {/* Tour date */}
                    <div class="form-group mb-6">
                        <input required type="date" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                            placeholder="Tour date" />
                    </div>

                    {/* Message box */}
                    <div class="form-group mb-6">
                        <textarea
                            class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                            id="exampleFormControlTextarea13"
                            rows="3"
                            placeholder="Any requirements, tell me."
                        ></textarea>
                    </div>

                    {/* submit button */}
                    <button onClick={handleBoook}
                        type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Book Now</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Checkout;