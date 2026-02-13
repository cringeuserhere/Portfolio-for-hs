// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-500 p-4 text-white">
            <div className="text-xl font-bold">
                <p>Brenden Alves</p>
                <Link href="/" className="space-between">
                    {/* Use anchor tags inside Link if you need to style the text */}
                   About Me
                </Link>
            </div>
            <div>
                <Link href="/about" className="mr-4 space-between" >
                    Projects
                </Link>
                <div>
                    <Link href="/contact"className="space-between">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;