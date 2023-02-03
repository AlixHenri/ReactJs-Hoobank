import React from 'react'
import FacebookIcon from '../assets/facebook.svg'
import InstagramIcon from '../assets/instagram.svg'
import TwitterIcon from '../assets/twitter.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import GithubIcon from '../assets/github.svg'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Soluções</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>E-Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Nuvem</li>
                </ul>
            </div>

        
            <div>
                <h6 className='font-bold uppercase pt-2'>Suporte</h6>
                <ul>
                    <li className='py-1'>Preços</li>
                    <li className='py-1'>Documentação</li>
                    <li className='py-1'>Guias</li>
                    <li className='py-1'>Status API</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Empresa</h6>
                <ul>
                    <li className='py-1'>Sobre</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Trabalhe Conosco</li>
                    <li className='py-1'>Imprensa</li>
                    <li className='py-1'>Parceiros</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Alegações</li>
                    <li className='py-1'>Privacidade</li>
                    <li className='py-1'>Termos de Serviço</li>
                    <li className='py-1'>Termos de Uso</li>
                    <li className='py-1'>Politicas</li>
                </ul>
            </div>
            <div className="cols-span-2 pt-8 md:pt-2">
                <p className='font-bold uppercase'>Inscreva-se para receber noticias e atualizações</p>
                <p className='py-4'>As ultimas noticias, artigos, e recursos, enviados ao seu email semanalmente.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input type="email" className='w-full p-2 mr-4 rounded-md mb-4'/>
                    <button className='p-2 mb-4'>Inscrever</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='p-4'>2023 Worflow, LLC. Todos os Direitos Reservados</p>
            <div className="flex justify-between sm:max-w-[300px]">
                <img src={FacebookIcon} alt="Facebook Icon" className='w-7 mr-4'/>
                <img src={InstagramIcon} alt="Instagram Icon" className='w-7 mr-4'/>
                <img src={TwitterIcon} alt="Twitter Icon" className='w-7 mr-4'/>
                <img src={LinkedinIcon} alt="Linkedin Icon" className='w-7 mr-4'/>
                <img src={GithubIcon} alt="Github Icon" className='w-7'/>
            </div>
        </div>
    </div>
  )
}

export default Footer