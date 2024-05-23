import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div id="app-menu" class="overflow-auto bg-white border-b-2">
      <nav class="flex items-center overflow-auto scrollable container mx-auto whitespace-nowrap">
        <div>
          <ul class="flex gap-8">
            <li>
              <Link
                title="Utenti"
                to="/about"
                class="flex items-center text-primary hover:text-primary px-2 py-2 border-b-2 border-transparent hover:border-gray-400"
              >
                Utenti{" "}
              </Link>
            </li>

            <li class="group">
              <Link
                title="Lina"
                to="/"
                class="flex gap-3 items-center text-primary hover:text-primary px-2 py-2 rounded hover:bg-gray-50 group"
              >
                Lina{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 group-hover:rotate-180 transition-transform"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </Link>
              <ul class="bg-white shadow-xl  h-0 overflow-hidden absolute z-50 group-hover:h-auto group-hover:bg-white transition-all duration-300 ease-in-out">
                <li>
                  <Link
                    title="Triggers"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Triggers{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    title="Analisi"
                    href="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Analisi{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    title="Automazioni"
                    href="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Automazioni{" "}
                  </Link>
                </li>
              </ul>
            </li>

            <li class="group">
              <Link
                title="Setup"
                to="/"
                class="flex gap-3 items-center text-primary hover:text-primary px-2 py-2 rounded hover:bg-gray-50 group"
              >
                Setup{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 group-hover:rotate-180 transition-transform"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </Link>
              <ul class="bg-white shadow-xl  h-0 overflow-hidden absolute z-50 group-hover:h-auto group-hover:bg-white transition-all duration-300 ease-in-out">
                <li>
                  <Link
                    title="Sedi"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Sedi{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    title="Canali"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Canali{" "}
                  </Link>
                </li>

                <li>
                  <a
                    title="Società Locatrici"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Società Locatrici{" "}
                  </a>
                </li>

                <li>
                  <Link
                    title="Marche Autovetture"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Marche Autovetture{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    title="Categorie Autovetture"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Categorie Autovetture{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    title="Alimentazioni Autovetture"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Alimentazioni Autovetture{" "}
                  </Link>
                </li>

                <li>
                  <a
                    title="Documentazioni Pratiche"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Documentazioni Pratiche{" "}
                  </a>
                </li>

                <li>
                  <Link
                    title="Specifiche Seo Sedi"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Specifiche Seo Sedi{" "}
                  </Link>
                </li>

                <li>
                  <a
                    title="Permessi"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Permessi{" "}
                  </a>
                </li>

                <li>
                  <Link
                    title="Email"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Email{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    title="Importa Leads"
                    to="/"
                    class="flex text-primary hover:text-primary px-4 py-2 rounded hover:bg-gray-50"
                  >
                    Importa Leads{" "}
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                title="Fatture in Cloud"
                to="/"
                class="flex items-center text-primary hover:text-primary px-2 py-2 border-b-2 border-transparent hover:border-gray-400"
              >
                Fatture in Cloud{" "}
              </Link>
            </li>

            <li>
              <Link
                title="Text"
                to="/"
                class="flex items-center text-primary hover:text-primary px-2 py-2 border-b-2 border-transparent hover:border-gray-400"
              >
                Text{" "}
              </Link>
            </li>

            <li>
              <Link
                title="Configs"
                to="/"
                class="flex items-center text-primary hover:text-primary px-2 py-2 border-b-2 border-transparent hover:border-gray-400"
              >
                Configs{" "}
              </Link>
            </li>
          </ul>{" "}
        </div>
      </nav>
    </div>
  );
}
