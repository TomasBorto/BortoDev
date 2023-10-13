import React from "react";
import './About.css'
import PersonalCard from "./PersonalCard/PersonalCard";
import Skills from "./Skills/Skills";
import Gallery from "./Gallery/Gallery";
import ContactForm from "./ContactForm/ContactForm";

export default function About() {
    return(
        <main className="about">
            <h1>Acerca de Mi</h1>
            <PersonalCard />
            <Skills />
            <Gallery />
            <ContactForm />
        </main>
    )
}