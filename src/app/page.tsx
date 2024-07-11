'use client'

import Image from "next/image";
import { CircleDollarSign, FileBarChart, Globe, HandCoins, TrendingUp, UserRound } from "lucide-react";
import NavBar from "@/components/NavBard";
import Buttom from '@/components/Button/index'
import CardDisclousure from "@/components/CardDisclosure";
import CardGuiaApp from "@/components/CardGuiaApp";
import CardService from "@/components/CardServies";
import CardList, { ItemList } from "@/components/CardListLink";
import ImgHome from '@/image/imgInterHome.webp'
import ImgPix from '@/image/pix.png'
import ImgInfo from '@/image/paymentimg.webp'
import ImgCard from '@/image/cardsPayments.webp'
import Logo from '@/image/logoInter.png'
import IconMac from '@/image/IconMac.svg'
import IconGoogle from '@/image/iconGooglePlay.svg'

export default function Home() {
  return (
    <>
      <header className="container card_header">
        <nav className="h_navbar">
          <NavBar />
        </nav>
      </header>
      <main className="card-main">
        <section className="container m_container-info">
          <div className="m_box-info-text">
            <div>
              <h2>Conta Digital</h2>
              <h3>Gratuita, simples e completa</h3>
              <p>Simplifique toda a sua vida com uma conta digital completa e um Super App com shopping, investimento, recarga e muito mais!</p>
            </div>
            <Buttom
              title='Abra sua Conta'
              state={false}
              style={true}
            />
          </div>
          <div className="m_box-info-img">
            <Image src={ImgHome} alt="" />
          </div>
        </section>
        <section className="container_loopInfinit">
          <div className="container card_infitloop-info">
            <h2>Todos os serviços que você precisa, online e sem burocracia!</h2>
            <div className="card_infitloop">
              <CardDisclousure
                title="O melhor Pix está aqui"
                description="
                Somos a única instituição financeira com o Pix nota A há 24 meses consecutivos, 
                avaliado pelo Índice de Qualidade de Serviço do Banco Central (IQS).
                O resultado do IQS é calculado através dos índices de reclamações, disponibilidade 
                e tempo de resposta."
                img={ImgPix}
                disableTitle={true}
                titlebutton="Conheça o Pix da Inter"
              />
              <CardDisclousure
                title="Pagamentos e transferências gratuitas"
                description="
                Envie e receba dinheiro, faça pagamentos e compre de forma rápida e simples. Com Pix, 
                TEDs e transferências no Inter, você faz agendamentos para todos os bancos sem pagar nada."
                img={ImgInfo}
                disableTitle={false}
              />
              <CardDisclousure
                title="Cartão de crédito sem anuidade com programa de pontos"
                description="
                Seu novo cartão já vem habilitado para compras no débito e pode ter a função crédito, 
                sujeito a análise. É sem anuidade e você ainda acumula pontos para trocar por milhas, 
                cashback e muito mais."
                img={ImgCard}
                disableTitle={true}
                titlebutton="Pedir meu cartão"
              />
            </div>
          </div>
        </section>
        <section className="Card_loop-products">
          <div className="card_infitloop-service">
            <CardService
              Icon={<CircleDollarSign size={30} />}
              description="Pix e TEDs ilimitados"
            />
            <CardService
              Icon={<TrendingUp size={30} />}
              description="Plataforma de investimentos"
            />
            <CardService
              Icon={<FileBarChart size={30} />}
              description="Depósito de dinheiro por boleto"
            />
            <CardService
              Icon={<Globe size={30} />}
              description="Conta Global"
            />
            <CardService
              Icon={<HandCoins size={30} />}
              description="Empréstimos e Financiamentos"
            />
            <CardService
              Icon={<UserRound size={30} />}
              description="Atendimento 24h"
            />
          </div>
        </section>
        <section className="card_guia-app">
          <h3>Como abrir sua conta digital pelo celular</h3>
          <div className="box_guia-app">
            <CardGuiaApp
              stap={1}
              title="Baixe o Super App na App Store ou Google Play "
              state={true}
            />
            <CardGuiaApp
              stap={2}
              title="Toque em Abrir uma conta gratuita "
              state={true}
            />
            <CardGuiaApp
              stap={3}
              title="Separe os seus documentos"
              state={true}
            />
            <CardGuiaApp
              stap={4}
              title="Preencha os dados solicitados e aguarde a aprovação"
              state={false}
            />
            <Buttom
              title='Abra sua Conta'
              state={false}
              style={true}
            />
          </div>
        </section>
      </main>
      <footer className="container container_footer">
        <div className="box_links-info">
          <Image
            src={Logo}
            width={200}
            height={200}
            alt='logo do banco Inter'
          />
          <div className="box_lists">
            <CardList
              title="Sobre nós"
            >
              <ItemList
                link='#'
                subTitle='O Inter'
              />
              <ItemList
                link='#'
                subTitle='Porta RI'
              />
              <ItemList
                link='#'
                subTitle='Ética e Compliance'
              />
              <ItemList
                link='#'
                subTitle='Investimentos'
              />
              <ItemList
                link='#'
                subTitle='Blog'
              />
            </CardList>

            <CardList
              title="Precisa de ajuda?"
            >
              <ItemList
                link='#'
                subTitle='Central de ajuda'
              />
              <ItemList
                link='#'
                subTitle='Canais de atendimento'
              />
              <ItemList
                link='#'
                subTitle='Ouvidoria'
              />
              <ItemList
                link='#'
                subTitle='2ª via do boleto'
              />
              <ItemList
                link='#'
                subTitle='Saldo devedor'
              />
              <ItemList
                link='#'
                subTitle='Negocie sua dívida'
              />
            </CardList>

            <CardList
              title="Nossos números"
            >
              <ItemList
                link='#'
                subTitle='Capitais e regiões metropolitanas: 0000 0000'
              />
              <ItemList
                link='#'
                subTitle='Demais localidades: 0000 000 0000'
              />
              <ItemList
                link='#'
                subTitle='SAC: 0800 000 0000'
              />

            </CardList>
          </div>
        </div>
        <div className="box_info-app">
          <div className="box_info-container">
            <h4>Baixe o App</h4>
            <div className="box_info-btn">
              <Buttom
                title='App Store'
                icon={IconMac}
                state={true}
                style={false}
              />
              <Buttom
                title='Google Play'
                icon={IconGoogle}
                state={true}
                style={false}
              />
            </div>
          </div>
          <p>©2024 Banco Inter S.A. CNPJ: 00.000.000/0000-00</p>
        </div>
      </footer>
    </>
  );
}
