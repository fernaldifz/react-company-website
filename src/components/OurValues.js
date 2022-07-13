import lightBulb from "../images/lightbulb-o.png"
import bank from "../images/bank.png"
import balanceScale from "../images/balance-scale.png"

const OurValues = () => {
    return (
        <div className="my-10 mx-40">
            <h4 className="font-bold text-2xl text-center mb-6">OUR VALUES</h4>
            <div className="flex flex-row">
                <div className="flex flex-row">
                    <div className="bg-[#E97B6E] border-4 border-[#E15242] text-white p-6">
                        <div className="flex justify-center py-4">
                            <img src={lightBulb} alt="Light Bulb" className="h-6" />
                        </div>
                        <h5 className="font-bold text-center text-xl">INNOVATIVE</h5>
                        <p className="pt-6 pb-12 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime exercitationem dolorem deserunt, unde, easque ipsa?
                        </p>
                    </div>
                    <div className="border-transparent border-[20px] border-l-[#E15242] flex self-center h-0 w-0" />
                </div>

                <div className="flex flex-row">
                    <div className="bg-[#6A996F] border-4 border-[#6E8D71] text-white p-6">
                        <div className="flex justify-center py-4">
                            <img src={bank} alt="Bank" className="h-6" />
                        </div>
                        <h5 className="font-bold text-center text-xl">LOYALTY</h5>
                        <p className="pt-6 pb-12 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit similique eum itaque facere temporibus doloers.
                        </p>
                    </div>
                    <div className="border-transparent border-[20px] border-l-[#6E8D71] flex self-center h-0 w-0" />
                </div>

                <div className="flex flex-row">
                    <div className="bg-[#5696C2] border-4 border-[#3D7DAB] text-white p-6">
                        <div className="flex justify-center py-4">
                            <img src={balanceScale} alt="Balance Scale" className="h-6" />
                        </div>
                        <h5 className="font-bold text-center text-xl">RESPECT</h5>
                        <p className="pt-6 pb-12 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, sit? Tenetur et neque quod incidunt!
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OurValues