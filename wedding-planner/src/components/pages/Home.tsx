import backgroundImage from '../../assets/images/beach_wedding.jpg';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className="relative w-full min-h-screen text-white overflow-hidden">
            <img
                src={backgroundImage}
                alt="Tło"
                className="absolute top-0 left-0 w-full h-full object-cover filter blur-sm z-0"
            />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
                <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 drop-shadow-lg">
                    Witaj w Wedding-Planner
                </h1>

                <div className="grid grid-cols-2 gap-4 w-full max-w-4xl px-4 text-xl">
                    <div
                        className={`bg-white/20 rounded-lg p-6 text-center text-gray-800 font-bold cursor-pointer ${styles.slideInLeft}`}
                        style={{ animationDelay: '0ms' }}
                    >
                        <div className={styles.bounceOnHover}>Inspiracja</div>
                    </div>
                    <div
                        className={`bg-white/20 rounded-lg p-6 text-center text-gray-800 font-bold cursor-pointer ${styles.slideInRight}`}
                        style={{ animationDelay: '100ms' }}
                    >
                        <div className={styles.bounceOnHover}>Dekoracje</div>
                    </div>
                    <div
                        className={`bg-white/20 rounded-lg p-6 text-center text-gray-800 font-bold cursor-pointer ${styles.slideInLeft}`}
                        style={{ animationDelay: '200ms' }}
                    >
                        <div className={styles.bounceOnHover}>Catering</div>
                    </div>
                    <div
                        className={`bg-white/20 rounded-lg p-6 text-center text-gray-800 font-bold cursor-pointer ${styles.slideInRight}`}
                        style={{ animationDelay: '300ms' }}
                    >
                        <div className={styles.bounceOnHover}>Zaproszenia</div>
                    </div>
                    <div
                        className={`bg-white/20 rounded-lg p-6 text-center text-gray-800 font-bold cursor-pointer ${styles.slideInLeft}`}
                        style={{ animationDelay: '400ms' }}
                    >
                        <div className={styles.bounceOnHover}>Fotograf</div>
                    </div>
                    <div
                        className={`bg-white/20 rounded-lg p-6 text-center text-gray-800 font-bold cursor-pointer ${styles.slideInRight}`}
                        style={{ animationDelay: '500ms' }}
                    >
                        <div className={styles.bounceOnHover}>Lokalizacja</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
