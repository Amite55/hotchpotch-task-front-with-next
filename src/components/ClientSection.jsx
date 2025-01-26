import Image from 'next/image';
import React from 'react';

import icon1 from "../../acetes/Logo (1).png"
import icon2 from "../../acetes/Logo (2).png"
import icon3 from "../../acetes/Logo (3).png"
import icon4 from "../../acetes/Logo (4).png"
import icon5 from "../../acetes/Logo (5).png"
import icon6 from "../../acetes/Logo (6).png"
import icon7 from "../../acetes/Logo (7).png"
import icon8 from "../../acetes/Logo (8).png"

const ClientSection = () => {
    return (
        <div className="container w-full text-center mx-auto px-10 py-16">
            <h2 className="text-2xl font-bold mb-12">Trusted by nearly 5000+ paying customers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-8">
                <Image src={icon1} width={160} height={40}  alt="Waverio" className="" />
                <Image src={icon2} width={160} height={40}  alt="SquareStone" className="" />
                <Image src={icon3} width={160} height={40}  alt="Martino" className="" />
                <Image src={icon4} width={160} height={40}  alt="Virogan" className="" />
                <Image src={icon5} width={160} height={40} alt="Vertex" className="" />
                <Image src={icon6} width={160} height={40} alt="Aromix" className="" />
                <Image src={icon7} width={160} height={40} alt="Aromix" className="" />
                <Image src={icon8} width={160} height={40} alt="Aromix" className="" />
            </div>
        </div>
    );
};

export default ClientSection;