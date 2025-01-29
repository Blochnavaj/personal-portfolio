import React from 'react'
import Swal from 'sweetalert2'


function ContactMe() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "79db56d4-056c-4817-9a43-a8c7e6954b83");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // Show success alert
      Swal.fire({
        title: "Good job!",
        text: "Your message has been sent successfully!",
        icon: "success"
      });

      // Reset the form fields
      event.target.reset();
    } else {
      // Show error alert
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error"
      });
    }
  };


  return (
    <>
      <div className='mt-[3rem] md:flex md:justify-around p-4' id='contact'>

        {/* contact details  */}
        <div className='md:pl-6'>
          <form onSubmit={onSubmit} className='grid gap-5  px-3'>
            <input className='md:w-[28rem] w-full  p-4 rounded-md border   focus:ring-gray-600 focus:outline-none focus:ring-2' type="text" placeholder='Enter Your Name' name='name' required />
            <input className='md:w-full  w-full p-4 rounded-md border   focus:ring-gray-600 focus:outline-none focus:ring-2' type="email" name="email" placeholder='Enter your Email' required />
            <textarea className='md:w-full w-full p-4 rounded-md resize-none border   focus:ring-gray-600 focus:outline-none focus:ring-2' name="message" id="" cols="6" rows="6" placeholder='How Can I Help You?' required></textarea>

            <div className='md:flex md:items-center md:justify-center md:mr-9 gap-2'>
  <button type="submit" className='m-auto border ml-4 px-4 py-2 md:px-4 md:py-3 md:text-nowrap  text-xl hover:text-gray-600 mt-1 transition-all duration-300 ease-linear rounded-lg bg-black text-white active:scale-90 active:bg-gray-700'>
    Get in Touch
  </button>

  <div className='flex gap-4 text-4xl items-center md:mt-2 mt-4 '>
    <a href="#" target='_blank' className='border px-4 py-2 rounded-md flex justify-center items-center border-black hover:bg-black hover:text-white'>
      <i className="fa-brands fa-facebook text-lg"></i>
    </a>

    <a href="https://www.linkedin.com/in/bloch-navaj" target='_blank' className='border px-4 py-2 rounded-md flex justify-center items-center border-black hover:bg-black hover:text-white'>
      <i className="fa-brands fa-linkedin text-lg"></i>
    </a>

    <a href="https://github.com/Blochnavaj" target='_blank' className='border px-4 py-2 rounded-md flex justify-center items-center border-black hover:bg-black hover:text-white'>
      <i className="fa-brands fa-github text-lg"></i>
    </a>

    <a href="#" target='_blank' className='border px-4 py-2 rounded-md flex justify-center items-center border-black hover:bg-black hover:text-white'>
      <i className="fa-brands fa-square-x-twitter text-lg"></i>
    </a>
  </div>
</div>

          </form>
        </div>

        {/* my detailed  */}

        <div className=' space-y-3 mt-4 pl-5'>
          <p className='md:text-6xl text-4xl font-bold'>Let's <span className='special-font'>Talk</span> For</p>
          <p className=',d:text-6xl text-4xl font-bold'>Something special</p>
          <p className='text-zinc-500 font-light text-sm '>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
      <div className='grid space-y-2'>
      <a
            href="mailto:navaj.bloch22@gmail.com"
            className="font-bold text-2xl md:text-3xl flex "
          >
            navaj.bloch22@gmail.com
          </a>
          <a
            href="tel:+917383034778"
            className="font-bold text-2xl md:text-3xl  "
          >
            +91-7383034778
          </a>
      </div>

        </div>
      </div>
    </>
  )
}

export default ContactMe