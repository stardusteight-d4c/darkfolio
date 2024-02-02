import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="w-screen h-screen">
      <div className="grid place-items-center items-center h-full">
        <div>
          <div className="flex items-center flex-col justify-center gap-x-2">
            <span className="text-[100px] font-semibold font-poppins">404</span>
            <span className="text-[32px] text-transparent bg-gradient-to-l from-[#f7ff00] to-[#ff00cc] bg-clip-text font-inter font-extralight uppercase">
              Page not found
            </span>
          </div>
          <Link
            href="/"
            className="block active:scale-95 mt-[40px] w-fit bg-white py-3 px-6 mx-auto text-black font-medium rounded-full"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}
