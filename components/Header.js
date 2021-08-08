import Image from 'next/image'
export default function Header() {
     
    return    <header className="h-24 sm:h-32 flex items-center">
  <div className="container mx-auto px-6 sm:px-12 flex items-center justify-between">
      <div className="text-black font-black text-2xl flex items-center">
          
                <Image width="120" height="120" className="w-12 h-12"   src="/assets/logo.png"  ></Image>
                
      </div>
      <div className="flex items-center">
          <nav className="text-black text-lg hidden lg:flex items-center">
              <a href="#" className="py-2 px-6 flex hover:text-blue-500">
                  Home
              </a>
              <a href="#team" className="py-2 px-6 flex hover:text-blue-500">
                  About us
              </a>
              <a href="#product" className="py-2 px-6 flex hover:text-blue-500">
                  Product
              </a>
              <a href="#info" className="py-2 px-6 flex hover:text-blue-500">
                  Info
              </a>
              <a href="#contact" className="py-2 px-6 flex  hover:text-blue-500">
                  Contact us
              </a>
    
          </nav>
          <button className="lg:hidden flex flex-col">
              <span className="w-6 h-px bg-gray-900 mb-1"></span>
              <span className="w-6 h-px bg-gray-900 mb-1"></span>
              <span className="w-6 h-px bg-gray-900 mb-1"></span>
          </button>
      </div>
  </div>
        </header>

}
