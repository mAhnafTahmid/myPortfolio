import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center items-center p-4'>
        <form action="https://getform.io/f/eapdqlza" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-4'>
                    Submit the form below or send me an email - aryan.ahnaf@gmail.com
                </p>
            </div>
            <input type="text" className='p-2 bg-[#ccd6f6]' placeholder='Name' name='name' />
            <input type="email" className='bg-[#ccd6f6] my-4 p-2' placeholder='Email' name='email' />
            <textarea name="message" rows="10" placeholder='Message' className='p-2 bg-[#ccd6f6]'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
                Let's Collaborate
            </button>
        </form>
    </div>
  )
}

export default Contact