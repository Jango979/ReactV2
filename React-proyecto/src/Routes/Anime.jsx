import React from 'react';
import '../styles/Anime.css'; // Ajusta la ruta a tu archivo CSS

const Anime = () => {
    return (
        <main>
            <div className="container mt-5">
                <div className="row">
                    {/* Ejemplo de una tarjeta */}
                    <div className="col-md-6 border border-primary">
                        <img src="/Anime/hxh.jpg" className="img-fluid" alt="Imagen 1" />
                        <b>Hunter X Hunter</b>
                        <h5 class="display-6" id="Sinopsis">  La historia tiene como protagonista a Gon Freecss, un niño de doce años que desea encontrar a su padre a toda costa, por lo que decide convertirse en cazador, justo como él, y de alguna forma hallar su paradero.</h5>
                    </div>
                    
                    <div className="col-md-6 border border-primary">
                        <img src="/Anime/AKAME.jpg" className="img-fluid" alt="Imagen 2" />
                        <b>Akame ga kill</b>
                        <h5 class="display-6" id="Sinopsis">La historia nos lleva a través de las aventuras de Tatsumi, un joven que viaja a la capital imperial desde su pequeña aldea rural para unirse al ejército. A su llegada a la gran ciudad, 
                        este es robado por una bella joven. Tras ser robado y sin dinero, es acogido por la bondadosa Lady Aria.
                        Pero justo cuando sus sueños en la gran Capital vuelen a estar a su alcance, una vez más,
                        la mansión de Lady Aria es asediada por Night Raid, un equipo de asesinos despiadados que luchan contra la tiranía de la Ciudad Imperial.</h5>
                    </div>

                    <div className="col-md-6 border border-primary">
                        <img src="/Anime/ANSATSU.jpg" className="img-fluid" alt="Imagen 3" />
                        <b>Ansatsu Kyoshitsu</b>
                        <h5 class="display-6" id="Sinopsis">
                        La historia sigue la vida cotidiana de Koro-sensei, un peculiar maestro con la apariencia similar a la de un pulpo, y la de sus estudiantes, cuya principal tarea es asesinarlo para evitar que la Tierra sea destruida.
                    </h5>
                    </div>

                    <div className="col-md-6 border border-primary">
                        <img src="/Anime/CG.jpg" className="img-fluid" alt="Imagen 4" />
                        <b>Code Geass</b>
                        <h5 class="display-6" id="Sinopsis">
                            El imperio de Brittania invadió Japón usando robots gigantes denominados Knightmare Frames.
                            Japón pasó a ser denominado como Área 11 y sus habitantes, los onceavos.
                            Un brittanico que en ese entonces vivía en Japón, Lelouch, le jura a su amigo Suzaku que él destruiría Brittania.
                        </h5>
                    </div>


                    <div className="col-md-6 border border-primary">
                        <img src="/Anime/Death Note.jpg" className="img-fluid" alt="Imagen 6" />
                        <b>Death Note</b>
                        <h5 class="display-6" id="Sinopsis">
                        La historia se centra en Light Yagami, un estudiante de escuela secundaria. Un día, encuentra un cuaderno con poderes sobrenaturales llamado "Death Note", con el cual es capaz de matar personas si se escriben los nombres de estas en él,
                        a la vez que si el portador visualiza mentalmente la cara de quien quiere asesinar.9​ Light, percatándose del potencial del cuaderno, intenta eliminar a todos los criminales y crear un mundo donde no exista la maldad; sin embargo, 
                        un misterioso detective privado que se hace llamar L, famoso mundialmente por resolver grandes casos en el pasado, tratará de frustrar sus planes.
                    </h5>
                    </div>


                    <div className="col-md-6 border border-primary">
                        <img src="/Anime/FMAB.jpg" className="img-fluid" alt="Imagen 7" />
                        <b>Full Metal Alchemist: Brotherhood</b>
                        <h5 class="display-6" id="Sinopsis">
                            Este anime nos cuenta la historia de los hermanos Edward (15 años) y Alphonse (14), quienes después de la muerte de su madre (cuando tenían la tierna edad que podéis ver en el gif superior), rompieron el mayor tabú de la alquimia al querer resucitarla:
                            la transmutación humana.
                            Como consecuencia, y debido a la ley del intercambio equivalente, Edward pierde su pierna izquierda y su hermano menor todo su cuerpo. Para salvarlo,
                            Edward sella el alma de Alphonse a una gran armadura de hierro y sacrifica a cambio su brazo derecho.
                        </h5>
                    </div>

                    <div className="col-md-6 border border-primary">
                        <img src="/Anime/HAIKYUU.jpg" className="img-fluid" alt="Imagen 8" />
                        <b>Haikyuu</b>
                    <h5 class="display-6" id="Sinopsis">
                        La historia sigue la carrera de Shoyo Hinata, que decide dedicarse al voleibol tras ver a los Pequeños Gigantes cuando todavía va a primaria. Pero en el último torneo en secundaria, su equipo recibe una auténtica paliza del equipo de Tobio Kageyama.
                        Sin embargo, Hinata también se une al equipo de voleibol al entrar al instituto para así vengarse de Kageyama pero, para su sorpresa,
                        Kageyama también está en el equipo. Así, dos antiguos rivales forman un equipo imbatible con el que buscan conseguir el campeonato nacional.
                    </h5>
                    </div>

                    <div className="col-md-6 border border-primary">
                        <img src="/Anime/Jujutsu Kaisen 2nd Season.jpg" className="img-fluid" alt="Imagen 8" />
                        <b>Jujustsu Kaisen</b>
                        <h5 class="display-6" id="Sinopsis">
                        Jujutsu Kaisen es un anime que sigue la historia de Yuji Itadori, un estudiante de secundaria que vive en Sendai junto a su abuelo. 
                        Aunque tenga un talento innato para el deporte, evita de todas formas el equipo de pista debido a su aversión al atletismo.
                    </h5>
                    </div>

                    {/* ... */}
                    </div>
                </div>
        </main>
    );
};

export default Anime;