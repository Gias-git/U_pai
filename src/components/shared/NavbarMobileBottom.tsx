
import { Brush, FlaskConical, HeartPlus, Home, UserRound } from "lucide-react"
import Link from "next/link"

const NavbarMobileBottom: React.FC = () => {

    return <div className="flex gap-3 justify-around">

        {/* Home  */}
        <div className="flex flex-col justify-center items-center gap-2">
            <Link className="flex flex-col justify-center items-center" href={'/'}> {/* ICON */}
                <div className="text-sm">
                    <Home size={20} strokeWidth={1.25}></Home>
                </div>

                <div className="text-sm">
                    HOME
                </div>

            </Link>
        </div>

        {/* Test  */}
        <div className="flex flex-col justify-center items-center gap-2">

            <Link className="flex flex-col justify-center items-center" href={'/lab-test'}> {/* ICON */}
                {/* ICON */}
                <div className="text-sm">
                    <FlaskConical size={20} strokeWidth={1.25} />
                </div>

                <div className="text-sm">
                    Lab Test
                </div>

            </Link>
        </div>


        {/* Beauty  */}
        <div className="flex flex-col justify-center items-center gap-2">
            {/* ICON */}
            <div className="text-sm">

                <Brush size={20} strokeWidth={1.25} />
            </div>

            <div className="text-sm">
                Beauty
            </div>
        </div>

        {/* Health Care  */}
        <div className="flex flex-col justify-center items-center gap-2">
            {/* ICON */}
            <div className="text-sm">
                <HeartPlus size={20} strokeWidth={1.25} />
            </div>

            <div className="text-sm">
                Health Care
            </div>
        </div>


        {/* Account  */}
        <div className="flex flex-col justify-center items-center gap-2">
            {/* ICON */}
            <div className="text-sm">
                <UserRound size={20} strokeWidth={1.25} />
            </div>

            <div className="text-sm">
                Account
            </div>
        </div>




    </div>
}

export default NavbarMobileBottom