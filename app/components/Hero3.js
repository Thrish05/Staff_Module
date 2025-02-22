export default function Hero2()
{
    return(
        <div className = "relative flex flex-row h-[50vh] w-full bg-red mb-10">

            <div className = "absolute left-4 flex text-black p-4 h-full w-[45vw] bg-paper bg-cover bg-norepeat rounded-3xl shadow-lg">
            </div>
            <div className = "absolute right-0 flex flex-col text-black p-4 h-full w-1/2 ">
                <h1 className="text-[50px]">Effortless Record Maintainence.</h1>
                <p className="overflow-hidden">Say goodbye to manual errors and inaccuracies in attendance tracking. 
                    CITadel offers an innovative biometric solution that enables you to register your presence digitally, providing a seamless and accurate attendance experience. 
                    For further information, visit the "Academics" tab where you can explore this feature in more detail.
                </p>
            </div>
            
        </div>
    )
}