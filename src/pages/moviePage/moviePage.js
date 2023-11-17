import React from "react"
import Header from "../../componets/header/header"
import Footer from "../../componets/footer/footer"
import Banner from "../../componets/banner/banner"
import { filmData } from "../mainPage/mainPage"
const MoviePage = () => {
    return (
        <div>
            <Header />
            <main>
                <Banner bannerName={"banner.jpg"} ratingMovie={filmData[0].rating} yearMovie={filmData[0].year}/>
            </main>
            <Footer />
        </div>
    )
}

export default MoviePage
