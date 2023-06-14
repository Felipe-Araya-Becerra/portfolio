import Image from "next/image";
import artimag from "../../public/img/article-image.jpg"
import bootstrap1 from "../../public/img/bootstrap1.png"
import css31 from "../../public/img/css31.png"
import git from "../../public/img/git.png"
import html5img from "../../public/img/html53.png"
import java from "../../public/img/java.png"
import js1 from "../../public/img/js1.png"
import mysql from "../../public/img/mysql.png"
import Net from "../../public/img/Net.jpg"
import oracle from "../../public/img/oracle.png"
import php from "../../public/img/php.png"
import Python from "../../public/img/Python.png"
import recluter from "../../public/img/recluter.jpeg"

export default function Home() {
  return (
    <main>
      <div className="container">
        {/* Se crea un section para crear la clase madre de CARD */}
        <section className="card mb-3 shadow-lg">
          {/* Card Background Image 
              Se le da la propiedad row para poder manegarlo con CSS Grid
              y el g-o remueve los espacios entremedio de donde se interceptan los elementos
          */}
          <div className="row g-0">
            <div className="col-md-4">
              <Image
                alt=""
                src={artimag}
                width={500}
                height={300}
                className="card-img-top"
              ></Image>
            </div>
            {/* Card Body */}
            <div className="col-md-8">
              <article className="card-body ">
                <h1 className="card-title">Hola, soy Felipe Araya!</h1>
                <p className="card-text">
                  Programador apasionado por la tecnologia desde pequeño, un
                  junior todavia en el mundo de la programacion, pero siempre
                  aprendiendo nuevas cosas y tecnologias
                </p>
              </article>
            </div>
          </div>
        </section>
        {/* Seccion reclutador */}
        <section className="card shadow-lg">
          <div className="row g-0">
            <div className="col-md-7">
              <article className="card-body">
                <h1 className="card-title">Si eres un reclutador:</h1>
                <p className="card-text">
                  Actualmente estoy en busqueda de una oportunidad laboral, si
                  es un reclutador, no dude enviar un mail a :
                  felipe.araya.becerra@gmail.com para entregar un curriculum
                  completo sobre mi perfil
                </p>
              </article>
            </div>
            <div className="col-md-5">
              <Image
                className="card-img-top"
                alt="recluter"
                src={recluter}
                height={400}
                width={500}
              ></Image>
            </div>
          </div>
        </section>
      </div>
      {/* Seccion Tecnologias */}
      <section className="container pt-lg-5">
        <section className="bg-light-subtle">
          <h1 className="text-center text-decoration-underline">Sobre Mi</h1>
          <p>
            Bueno, acabo de titularme en Inacap, de la carrera analista
            programador, lamentablemente la mayoria de perfiles piden
            experiencia laboral, la cual aun no he podido conseguir, y el motivo
            por el cual desarrolle esta pagina, aun asi, creo haber salido con
            una buena base, asi que a continuacion dejare uina lista con las
            tecnologias y mas o menos una descripcion de lo que hize con ellas:
          </p>
          {/* Detalles de las tecnologias */}
          <section className="pt-4">
            {/* Tecnologias Front */}
            <section>
              <h2>Tecnologias Front-End</h2>
              <section className="row">
                <article className="card col-3">
                  <Image
                    alt="HTML5 image"
                    src={html5img}
                    width={200}
                    height={200}
                    className="card-img pt-1 img-fluid"
                  ></Image>
                  <article className="card-body">
                    <h2 className="card-title">HTML5</h2>
                    <p className="card-text">
                      Mis conocimientos en HTML5, son bastante solidos, no obstante, aun me queda por aprender buenas costumbres
                    </p>
                  </article>
                </article>
                <article className="card col-3">
                  <Image
                    alt="HTML5 image"
                    src={css31}
                    width={200}
                    height={200}
                    className="card-img pt-1 img-fluid mh-25"
                  ></Image>
                  <article className="card-body">
                    <h2 className="card-title">CSS3</h2>
                    <p className="card-text">
                      Me fue un poco dificil entender su funcionamiento al principio, pero luego de un tiempo te acostumbras
                    </p>
                  </article>
                </article>
                <article className="card col-3">
                  <Image
                    alt="HTML5 image"
                    src={js1}
                    width={200}
                    height={200}
                    className="card-img pt-1 img-fluid"
                  ></Image>
                  <article className="card-body">
                    <h2 className="card-title">JavaScrip</h2>
                    <p className="card-text">
                      Un gran lenguaje para poder comenzar en la programacion, tuve la oportunidad de usarlo bastante durante mi carrera
                    </p>
                  </article>
                </article>
                <article className="card col-3">
                  <Image
                    alt="HTML5 image"
                    src={bootstrap1}
                    width={200}
                    height={200}
                    className="card-img pt-1 img-fluid"
                  ></Image>
                  <article className="card-body">
                    <h2 className="card-title">Bootstrap</h2>
                    <p className="card-text">
                      Recien me adentro en el mundo de los frameworks de CSS, aun asi, es muy sencillo de aprender y de usar, esta misma pagina esta hecha con Bootstrap
                    </p>
                  </article>
                </article>
              </section>
            </section>
            {/* Tecnologias Back */}
            <section className="pt-4">
              <h2>Tecnologias Back-End</h2>
              <section className="row">
                <article className="card col-3">
                  <Image
                  alt="HTML5 image"
                  src={java}
                  width={200}
                  height={200}
                  className="card-img pt-1 img-fluid">
                  </Image>
                  <article className="card-body">
                    <h2 className="card-title">Java</h2>
                    <p className="card-text">
                      El principal lenguaje que ocupe en toda mi carrera, muy robusto pero un poco complicado de ocupar a veces
                    </p>
                  </article>
                </article>
                <article className="card col-3">
                  <article className="card-body">
                  <Image
                    alt="HTML5 image"
                    src={php}
                    width={200}
                    height={200}
                    className="card-img pt-1 img-fluid"
                  ></Image>
                    <h2 className="card-title">PHP</h2>
                    <p className="card-text">
                      Odiado por algunos, amado por otros, me dio un poco de dolor de cabeza durante mi carrera, aun asi, me ayudo bastante para mi proyecto de titulo
                    </p>
                  </article>
                </article>
                <article className="card col-3">
                  <article className="card-body">
                  <Image
                    alt="HTML5 image"
                    src={Net}
                    width={200}
                    height={200}
                    className="card-img pt-1 img-fluid"
                  ></Image>
                    <h2 className="card-title">.Net</h2>
                    <p className="card-text">
                      Ultimo lenguaje que vi en mi carrera, otro dolor de cabeza junto con el MVC, aun asi, fue divertido crear los programas con este lenguaje
                    </p>
                  </article>
                </article>
                <article className="card col-3">
                  <article className="card-body">
                  <Image
                    alt="HTML5 image"
                    src={Python}
                    width={200}
                    height={200}
                    className="card-img pt-1 img-fluid"
                  ></Image>
                    <h2 className="card-title">Python</h2>
                    <p className="card-text">
                      Facil de aprender a primera instancia, perfecto para entender logica de programacion o para redes neuronales
                    </p>
                  </article>
                </article>
              </section>
            </section>

            {/* Otras tecnologias */}
            <section className="pt-4">
              <h2>Otras tecnologias</h2>
              <section className="row">
                <article className="card col-4">
                  <article className="card-body">
                  <Image
                    alt="HTML5 image"
                    src={mysql}
                    width={200}
                    height={200}
                    className="card-img pt-1 img-fluid"
                  ></Image>
                    <h2 className="card-title">MySQL</h2>
                    <p className="card-text">
                      En mi paso por la carrera, fue una de las tecnologias que mas me costo por la normalizacion de base de datos, hasta hoy tengo dudas de si apredi a hacerlo bien
                    </p>
                  </article>
                </article>
                <article className="card col-4">
                  <article className="card-body">
                  <Image
                    alt="HTML5 image"
                    src={oracle}
                    width={200}
                    height={200}
                    className="card-img pt-1 img-fluid"
                  ></Image>
                    <h2 className="card-title">Oracle</h2>
                    <p className="card-text">
                      Otro dolor de cabeza, aunque con esta base de datos hicimos mas de parte admin, como triggers,permisos, inner y cosas asi
                    </p>
                  </article>
                </article>
                <article className="card col-4">
                  <article className="card-body">
                  <Image
                    alt="HTML5 image"
                    src={git
                    
                    
                    }
                    width={200}
                    height={200}
                    className="card-img pt-1 img-fluid"
                  ></Image>
                    <h2 className="card-title">Git</h2>
                    <p className="card-text">
                      La mejor herramienta nunca creada, me ha salvado en muchas ocaciones, aunque aun me falta para poder sacar su maximo provecho
                    </p>
                  </article>
                </article>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
