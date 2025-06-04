import logoImage from '../assets/images/logo.webp';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 p-4 text-center text-sm">
            <p>
                © {new Date().getFullYear()}
                <img
                    src={logoImage}
                    alt="Ikona"
                    className="inline w-4 h-4 mx-1 align-text-bottom"
                />
                Wedding-Planner. Wszelkie prawa zastrzeżone.
            </p>
        </footer>

    );
}
export default Footer;