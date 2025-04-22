import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const carte = {
    entrees: [
      {
        nom: "Bruschetta napolitaine",
        desc: "Pain grillé, tomates fraîches, basilic",
        prix: "6,90€",
      },
      {
        nom: "Carpaccio de bœuf à la truffe",
        desc: "Fines tranches de bœuf, huile de truffe",
        prix: "9,50€",
      },
      {
        nom: "Mozzarella di Bufala",
        desc: "Servie avec roquette et tomates cerise",
        prix: "7,80€",
      },
    ],
    plats: [
      {
        nom: "Pizza Margherita",
        desc: "Tomates San Marzano, mozzarella, basilic",
        prix: "12,90€",
      },
      {
        nom: "Risotto aux champignons",
        desc: "Cèpes, champignons de Paris, parmesan",
        prix: "14,90€",
      },
      {
        nom: "Tagliatelles aux fruits de mer",
        desc: "Moules, crevettes, sauce tomate maison",
        prix: "15,50€",
      },
    ],
    desserts: [
      {
        nom: "Tiramisu maison",
        desc: "Café, mascarpone, cacao amer",
        prix: "6,00€",
      },
      {
        nom: "Panna cotta",
        desc: "Coulis de fruits rouges ou caramel",
        prix: "5,50€",
      },
      {
        nom: "Gelato 3 parfums",
        desc: "Glace artisanale italienne",
        prix: "5,00€",
      },
    ],
    boissons: [
      { nom: "Eau minérale / gazeuse", prix: "2,50€" },
      { nom: "Coca-Cola / Orangina", prix: "3,00€" },
      { nom: "Verre de vin italien (rouge/blanc)", prix: "4,50€" },
      { nom: "Espresso italien", prix: "2,20€" },
    ],
    menus: [
      {
        titre: "Menu Découverte",
        contenu: "Entrée + Plat + Dessert",
        prix: "24,90€",
      },
      {
        titre: "Formule Midi",
        contenu: "Plat + Boisson (du lundi au vendredi)",
        prix: "16,90€",
      },
      {
        titre: "Menu Bambino",
        contenu: "Plat enfant + Dessert + Boisson",
        prix: "12,00€",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2a1f17] to-[#3c2d24] text-white font-serif relative">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-6 py-4 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white font-bold text-lg uppercase tracking-widest">
            Oro di Napoli
          </span>
        </div>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-sm uppercase">
          <li className="hover:text-[#d4af7f] cursor-pointer">Accueil</li>
          <li className="hover:text-[#d4af7f] cursor-pointer">Carte</li>
          <li className="hover:text-[#d4af7f] cursor-pointer">Réservation</li>
          <li className="hover:text-[#d4af7f] cursor-pointer">Contact</li>
        </ul>
        {/* Hamburger icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center space-y-6 text-xl uppercase">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-6 text-white text-3xl"
          >
            ✕
          </button>
          <a
            href="#"
            className="hover:text-[#d4af7f]"
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </a>
          <a
            href="#"
            className="hover:text-[#d4af7f]"
            onClick={() => setMenuOpen(false)}
          >
            Carte
          </a>
          <a
            href="#"
            className="hover:text-[#d4af7f]"
            onClick={() => setMenuOpen(false)}
          >
            Réservation
          </a>
          <a
            href="#"
            className="hover:text-[#d4af7f]"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}

      {/* HEADER VISUEL */}
      <header className="relative h-screen w-full">
        <img
          src={`${process.env.PUBLIC_URL}/images/header.jpg`}
          alt="Fond italien"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-widest mb-4">
            Oro di Napoli
          </h1>
          <p className="text-lg md:text-xl italic text-[#d4af7f]">
            L’Italie authentique, au cœur de Paris.
          </p>
        </div>
      </header>

      {/* SECTION CARTE */}

      <section className="px-4 py-16 bg-[#473529]">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-wider">
          Notre Carte
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {Object.entries(carte).map(([categorie, items]) => (
            <div key={categorie}>
              <h3 className="text-xl font-bold mb-4 text-[#d4af7f] uppercase">
                {categorie}
              </h3>
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="mb-4 bg-[#2f1e16] p-4 rounded-xl shadow hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">
                      {item.nom || item.titre}
                    </h4>
                    <p className="text-[#d4af7f] font-bold text-right ml-4">
                      {item.prix}
                    </p>
                  </div>
                  {item.desc || item.contenu ? (
                    <p className="text-sm italic opacity-75 mt-1">
                      {item.desc || item.contenu}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center uppercase">
          Réservez une Table
        </h2>
        <form className="max-w-md mx-auto space-y-4 text-black">
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full px-4 py-2 rounded shadow focus:outline-none"
          />
          <input
            type="email"
            placeholder="Adresse e-mail"
            className="w-full px-4 py-2 rounded shadow focus:outline-none"
          />
          <input
            type="date"
            className="w-full px-4 py-2 rounded shadow focus:outline-none"
          />
          <input
            type="time"
            className="w-full px-4 py-2 rounded shadow focus:outline-none"
          />
          <input
            type="number"
            placeholder="Nombre de personnes"
            className="w-full px-4 py-2 rounded shadow focus:outline-none"
            min="1"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#d4af7f] text-white rounded shadow hover:bg-[#b89565] transition"
          >
            Réserver
          </button>
        </form>
      </section>

      <section className="px-4 py-10 bg-[#5a4336]">
        <h2 className="text-2xl font-bold mb-6 text-center uppercase">
          Commande en Ligne
        </h2>
        <div className="max-w-md mx-auto space-y-4">
          <p className="text-center text-sm">
            Commandez vos plats préférés directement depuis notre site. À
            emporter ou en livraison, vivez l'expérience Oro di Napoli à la
            maison.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-[#d4af7f] text-white rounded shadow hover:bg-[#b89565] transition">
              Voir le Menu et Commander
            </button>
          </div>
        </div>
      </section>
      {/* SECTION GALERIE - CAROUSEL */}
      <section className="px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-wider">
          Galerie
        </h2>
        <div className="max-w-3xl mx-auto">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            emulateTouch
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/plats1.jpg`}
                className="w-full h-[400px] object-cover"
                alt="Plat italien"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/plats2.jpg`}
                className="w-full h-[400px] object-cover"
                alt="Pizza artisanale"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/salle1.jpg`}
                className="w-full h-[400px] object-cover"
                alt="Salle du restaurant"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/dessert.jpg`}
                className="w-full h-[400px] object-cover"
                alt="Dessert italien"
              />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FOOTER AVEC ICONES */}
      <footer className="bg-[#2a1f17] px-6 py-10 text-sm text-center text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold mb-2 uppercase">Coordonnées</h4>
            <p>📍 123 Rue Fictive, 75000 Paris</p>
            <p>📞 01 23 45 67 89</p>
            <p>✉️ contact@orodinapoli.fr</p>
          </div>
          <div>
            <h4 className="font-bold mb-2 uppercase">Horaires</h4>
            <p>Lundi - Vendredi : 12h - 14h / 19h - 23h</p>
            <p>Samedi : 12h - 23h</p>
            <p>Dimanche : Fermé</p>
          </div>
          <div>
            <h4 className="font-bold mb-2 uppercase">Suivez-nous</h4>
            <div className="flex justify-center gap-6 text-2xl mt-4">
              <a
                href="#"
                className="hover:text-[#d4af7f]"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-[#d4af7f]"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#d4af7f]" aria-label="TikTok">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-400">
          © {new Date().getFullYear()} Oro di Napoli — Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
