import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Avengers API</h3>
            <p className="text-sm text-gray-400">
              Une mini API pour explorer les personnages de l’univers Marvel By jerry Tanjaka
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-300 uppercase">Liens</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition duration-200 hover:text-white"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition duration-200 hover:text-white"
                >
                  Ajouter un Avenger
                </a>
              </li>
            </ul>
          </div>

          {/* Sectio 3 */}
          <div > 
            <h4 className="mb-3 text-sm font-semibold text-gray-300  uppercase">Réseaux</h4>
            <ul className="flex items-center space-x-2 w-fit">
              <li>
                <a
                  href="#"
                  className=" ml-[-15px] flex items-center justify-center rounded-full  text-gray-400 transition hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:text-white"
                  style={{ width: 50, height: 50 }}
                >
                  <FaFacebookF size={30} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-full p-2 text-gray-400 transition hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 hover:text-white"
                  style={{ width: 50, height: 50 }}
                >
                  <FaInstagram size={30} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-full p-2 text-gray-400 transition hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white"
                  style={{ width: 50, height: 50 }}
                >
                  <FaTwitter size={28} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-300 uppercase">Contact</h4>
            <p className="text-sm text-gray-400">contact@avengers-api.com</p>
            <p className="text-sm text-gray-400">+261 34 00 000 00</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Avengers API. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
