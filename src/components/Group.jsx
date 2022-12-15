import React from 'react'
import FlagQatar from "../assets/images/flags/qatar.svg";
import FlagEquador from "../assets/images/flags/ecuador.svg";
import FlagSenegal from "../assets/images/flags/senegal.svg";
import FlagHolanda from "../assets/images/flags/netherlands.svg";

export function Group() {
  return (
    <main className="w-full mt-8">
        <div className="w-full h-auto mx-0 my-auto">
            <div className="flex justify-center items-center">
                <h3 className="text-lg text-gray-900 font-bold border-b-4 border-magenta-900">GRUPOS</h3>
            </div>
            <div data-aos="zoom-in" className="flex flex-col justify-center items-center mt-8">
                <div className="w-[300px] h-[370px] px-[10px] py-[30px] bg-gray-100 rounded-lg shadow shadow-gray-300/25 mb-4">
                    <p className="flex justify-center text-gray-900 font-bold text-sm mb-8">GRUPO A</p>
                <div>
                    <div className="flex items-center mx-[30px] my-auto pb-4">
                        <img src={FlagQatar} alt="Bandeira do Qatar" className="w-[50px]" />
                        <span className="text-sm ml-3">Qatar</span>
                    </div>
                    <div className="flex items-center mx-[30px] my-auto pb-4">
                        <img src={FlagEquador} alt="Bandeira do Equador" className="w-[50px]" />
                        <span className="text-sm ml-3">Equador</span>
                    </div>
                    <div className="flex items-center mx-[30px] my-auto pb-4">
                        <img src={FlagSenegal} alt="Bandeira do Senegal" className="w-[50px]" />
                        <span className="text-sm ml-3">Senegal</span>
                    </div>
                    <div className="flex items-center mx-[30px] my-auto pb-4">
                        <img src={FlagHolanda} alt="Bandeira do Holanda" className="w-[50px]" />
                        <span className="text-sm ml-3">Holanda</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}
