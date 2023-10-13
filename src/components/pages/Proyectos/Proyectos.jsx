import React from "react";
import './Proyectos.css'
import Card from "./Card/Card";
import { ProyectosData } from "./ProyectosData";

export default function Proyectos() {

    const data = ProyectosData

    return(
        <main className="main-service">
            <h1>Mis Proyectos</h1>
            <section className="cards">
            {data.map((proyecto) => {
                return(
                    <Card proyecto={proyecto} />
                )
            })}
            </section>
        </main>
    )
}