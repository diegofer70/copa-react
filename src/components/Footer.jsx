import React from 'react';
import LogoFifa from '../assets/images/logo-fifa/logo-fifa.svg'

export function Footer() {
    return (
        <footer>
            <div className="w-full h-[24rem] flex justify-center bg-magenta-900">
                <div className="flex justify-between items-center">
                    <div className="flex gap-32 text-gray-100">
                        <ul className="flex flex-col gap-2">
                            <h2 className="font-bold">Redes Sociais</h2>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twtitter</li>
                            <li>Youtube</li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <h2 className="font-bold">Legais</h2>
                            <li>Sobre</li>
                            <li>Licença</li>
                            <li>Contato</li>
                            <li>Política de Privacidade</li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <h2 className="font-bold">Fifa</h2>
                            <li>Serviços</li>
                            <li>Patrocinadores</li>
                        </ul>
                    </div>
                    <div className="w-[200px] flex flex-col items-center mx-32">
                        <img src={ LogoFifa } />
                    </div>
                </div>
            </div>
        </footer>
    )
}