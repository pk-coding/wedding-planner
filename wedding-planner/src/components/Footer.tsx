import logoImage from '../assets/images/logo.webp';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 p-4 text-center text-lg">
            <p>
                © {new Date().getFullYear()}
                <img
                    src={logoImage}
                    alt="Ikona"
                    className="inline w-8 h-8 mx-1 align-text-bottom"
                />
                Wedding-Planner. Wszelkie prawa zastrzeżone.
            </p>
        </footer>

    );
}
export default Footer;