import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Image from '../components/StyledHero';
export default function Home() {
    return (
        <>
        <Hero >
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
            <Services></Services>
            <FeaturedRooms/>
            {/* <Image>Hello</Image> */}
        </>
    );
}
