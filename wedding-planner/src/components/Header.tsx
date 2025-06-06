import logoImage from '../assets/images/logo.webp';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white text-xl p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold flex items-center">
                <img src={logoImage} alt="Ikona" className="w-14 h-14 mr-2" />
                Wedding-Planner
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Strona główna</a></li>
                    <li><a href="/about" className="hover:underline">O nas</a></li>
                    <li><a href="/contact" className="hover:underline">Kontakt</a></li>
                </ul>
            </nav>
        </header>

    );
};
export default Header;