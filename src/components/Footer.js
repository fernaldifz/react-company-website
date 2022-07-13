import facebookOfficial from "../images/facebook-official.png"
import twitter from "../images/twitter.png"

const Footer = () => {
    return (
        <div className="bg-[#333333] grid justify-items-center">
            <div className="text-white text-sm pt-8 pb-4">Copyright @ 2016. PT Company</div>
            <div className="flex flex-row pb-6">
                <img src={facebookOfficial} alt="facebook" className="pr-2 h-8" />
                <img src={twitter} alt="twitter" className="pl-2 h-8" />
            </div>
        </div>
    )
}

export default Footer