'use client'

import NavBar from "@/components/NavBard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="">
        <nav>
          <NavBar />
        </nav>
        <div className="">
          <div className="">
            <div>
              <h2>Conta Digital</h2>
              <h3>Gratuita, simples e completa</h3>
              <p>Simplifique toda a sua vida com uma conta digital completa e um Super App com shopping, investimento, recarga e muito mais!</p>
            </div>
            <button>Abra sua conta</button>
          </div>
          <div className="">
            {/* <Image src={} alt=""/> */}
          </div>
        </div>

      </header>
      <main className="">
      </main>
      <footer className="">
      </footer>
    </>
  );
}
