import React from "react";

export default function Link() {

    return(
        <section className="links">
            <a href="https://twitter.com/Styne001">
                <button id="twitter_btn">Twitter Link</button>
            </a>
            <a href="https://training.zuri.team">
                <button id="btn_zuri">Zuri Team</button>
            </a>
            <a href="https://books.zuri.team">
                <button id="books">Zuri Books</button>
            </a>
            <a href="https://books.zuri.team/python-for-beginners?ref_id=Celestine">
                <button id="book_python">Python Books</button>
            </a>
            <a href="https://background.zuri.team">
                <button id="pitch">Background Check for Coders</button>
            </a>
            <a href="https://books.zuri.team/design-rules">
                <button id="book_design">Design Books</button>
            </a>
        </section>
    )
}