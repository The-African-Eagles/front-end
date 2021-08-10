import Image from 'next/image'

export default function Footer() {

    return <div className="w-full min-h-screen flex items-center justify-center bg-black">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
            <div className="w-full text-7xl font-bold">
                <h1 className="w-full md:w-2/3">How can we help you. get
                    in touch</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                <p className="w-full md:w-2/3 text-gray-400"> Let s build a beautiful place to live together </p>
                <div className="w-44 pt-6 md:pt-0">
                    <a className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex mt-24 mb-12 flex-row justify-between">
                    <div className="">
                                <Image width={80} height={80 }   src="/assets/logo-footer.png" />
                    </div>
  
                    <div className="flex flex-row space-x-8 items-center justify-between">
                    
                        <a href="https://github.com/The-African-Eagles">
                            Github                          
                        </a>
                    </div>
                </div>
                <hr className="border-gray-600"/>
                <p className="w-full text-center my-12 text-gray-600">Copyright © 2021 African Eagles</p>
            </div>
        </div>
    </div>

 }