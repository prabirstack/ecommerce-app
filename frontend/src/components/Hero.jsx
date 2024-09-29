import { assets } from "../assets/frontend_assets/assets"

const Hero = () => {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
      {/* Hero left side */}
      <div className="flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
            <p className="text-sm font-medium uppercase md:text-base">our bestsellers</p>
          </div>
          <h1 className="text-3xl leading-relaxed capitalize prata-regular sm:py-3 lg:text-5xl">latest arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold uppercase md:text-base">shop now</p>
            <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img src={assets.hero_img} alt="hero" className="w-full sm:w-1/2" />
    </div>
  )
}
export default Hero
