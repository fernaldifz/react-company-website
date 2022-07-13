import { useState } from "react"

const ContactUs = ({ myRef }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isNameError, setIsNameError] = useState(false)
    const [isEmailError, setIsEmailError] = useState(false)
    const [isMessageError, setIsMessageError] = useState(false)

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const scrollToTop = () => {
        if (myRef.current) {
            myRef.current.scrollIntoView()
        }
    };

    const validateName = () => {
        if (!name) {
            setIsNameError(true)
        } else {
            setIsNameError(false)
        }
    }

    const validateEmail = (re1, re2) => {
        if (!(re1.test(email) && re2.test(email))) {
            setIsEmailError(true)
        } else {
            setIsEmailError(false)
        }
    }

    const validateMessage = () => {
        if (!message) {
            setIsMessageError(true)
        } else {
            setIsMessageError(false)
        }
    }

    const resetState = () => {
        setName("")
        setEmail("")
        setMessage("")
        setIsNameError(false)
        setIsEmailError(false)
        setIsMessageError(false)
    }

    const handleSubmitData = () => {
        const re1 = new RegExp("[@]")
        const re2 = new RegExp("[.]")

        if (re1.test(email) && re2.test(email) && name && message) {
            const data = {
                name: name,
                email: email,
                message: message
            }
            console.log(data)
            resetState()
            scrollToTop()
        } else {
            validateName()
            validateEmail(re1, re2)
            validateMessage()
            console.log("tidak valid")
        }
    }

    return (
        <div className="mt-32 mb-20 mx-40">
            <h4 className="font-bold text-2xl text-center mb-6">CONTACT US</h4>
            <div>
                <form className="flex flex-col grid justify-items-center">
                    <div className="flex flex-col mb-4 w-1/2">
                        <label htmlFor="name" className="pb-2">Name</label>
                        <input
                            id="name"
                            type="text"
                            className={"border py-2 pl-4 " + (isNameError ? "border-rose-600" : "border-slate-400")}
                            value={name}
                            onChange={onChangeName}
                            required
                        />
                        {isNameError && (
                            <div className="text-red text-rose-600 pt-1">
                                This field is required.
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-1/2">
                        <label htmlFor="email" className="pb-2">Email</label>
                        <input
                            id="email"
                            type="email"
                            className={"border py-2 pl-4 " + (isEmailError ? "border-rose-600" : "border-slate-400")}
                            value={email}
                            onChange={onChangeEmail}
                            required
                        />
                        {isEmailError && (
                            <div className="text-red text-rose-600 pt-1">
                                Invalid email address.
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-1/2">
                        <label htmlFor="message" className="pb-2">Message</label>
                        <textarea
                            id="message"
                            type="message"
                            rows="4"
                            className={"border py-2 pl-4 " + (isMessageError ? "border-rose-600" : "border-slate-400")}
                            value={message}
                            onChange={onChangeMessage}
                            required
                        />
                        {isMessageError && (
                            <div className="text-red text-rose-600 pt-1">
                                This field is required.
                            </div>
                        )}
                    </div>
                    <button
                        className="bg-[#5696C2] text-white py-2 px-4 w-1/2"
                        type="button"
                        onClick={handleSubmitData}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs