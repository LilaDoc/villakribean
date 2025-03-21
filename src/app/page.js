import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/common/Header";

import Video from "@/components/ui/Video";


export default function Home() {
  const handleSubmit = (e) => {
  };
  return (
    <div className={`${styles.page} `}>
      <section className={styles.landing}>
        <div className={styles.header}>
          <Header />
        </div>
        <section className={styles.hero}>
          <Image 
          src="/hero.jpg" 
          alt="Hero" 
          fill={true}
          priority
          className={styles.heroImage}
          />
          <h1>La Villa K'ribean</h1>
        </section>
      </section>
      <section className={styles.videoSection}>

          <h2>Venez vous installer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          <div className={styles.videoContainer}>
            <Video />
          </div>
          

      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutCarousel}>
            {/* <Image src="/about1.jpg" alt="About" fill={true} />
            <Image src="/about2.jpg" alt="About" fill={true} />
            <Image src="/about3.jpg" alt="About" fill={true} /> */}
          </div>
          <div className={styles.aboutTextContainer}>
            <div className={styles.aboutText}>
              <p>
              Bienvenue à la Villa des K'ribean, une retraite d'exception au cœur d'un environnement paisible. Nos deux chambres, la salle de bain moderne et le jardin vous garantissent tout le confort nécessaire pour un séjour mémorable. Notre villa allie avec finesse élégance et praticité, offrant un espace bien aménagé où chaque détail est conçu pour votre bien-être. Venez explorer notre havre de paix, où le confort contemporain et la chaleur humaine se combinent pour offrir une expérience d'hébergement inoubliable.
              </p>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image src="/person.svg" alt="About" height={72} width={72} />
                  </div>
                  <p>
                    6
                  </p>
                  <p>
                    VOYAGEURS
                  </p>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image src="/bed.svg" alt="About" height={72} width={72} /> 
                  </div>
                  <p>
                    2 
                  </p>
                  <p>
                    CHAMBRES
                  </p>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image src="/shower.svg" alt="About" height={72} width={72} />
                  </div>
                  <p>
                    1
                  </p>
                  <p>
                    SDB
                  </p>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.aboutServicesTitle}>
            <h2>A VOTRE DISPOSITION</h2>
        </div>
        <div className={styles.aboutServices}>
 
          <div className={styles.aboutServicesContent}>
               <div className={styles.aboutServicesList}>
                <div className={styles.aboutServicesItem}>
                    <div className={styles.aboutServicesItemImage}>
                    <Image src="/wifi.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    WIFI
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <Image src="/clim.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    CLIMATISATION
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <Image src="/water.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    CITERNE D'EAU
                  </p>
                </div>
               </div>
               <div className={styles.aboutServicesList}>
               <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <Image src="/car.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    PARKING
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <Image src="/yard.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    JARDIN & TERRASSSE
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <Image src="/bebechambre.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    LIT BÉbÉ
                  </p>
                </div>
               </div>
               <div className={styles.aboutServicesList}>
               <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <Image src="/lavelinge.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    LAVE-LINGE
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <Image src="/tv.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    TV
                  </p>
                </div>
                <div className={styles.aboutServicesItem}>
                  <div className={styles.aboutServicesItemImage}>
                    <Image src="/cafe.svg" alt="About" height={30} width={30} />
                  </div>
                  <p>
                    MACHINE À CAFÉ
                  </p>
                </div>
               </div>
          </div>
          
        </div>
      </section>
      <section className={styles.locationSection}>
        <div className={styles.locationContainer}>
            <Image src="/map.png" alt="About" fill={true} />
          
        </div>

      </section>
      <section className={styles.decouverteSection}> 
        <div className={styles.decouverteContainer}>
          <div className={styles.decouverteTitle}>
            <h2>DÉTENTE</h2>
          </div>
          <div className={styles.decouverteContent}>
            <div className={styles.decouverteImage}>
                <Image src="/beach.jpg" alt="About" fill={true} />
            </div>
            <div className={styles.decouverteText}>
              <p>
              LA POINTE DES CHATEAUX
              <br />
              DISTANCE : 25KM
              <br />
              Si vous voulez admirer un lever de soleil, c'est l'endroit idéal. 
              <br />
              Attention, le soleil se lève très tôt ici !
              </p>
            </div>
          </div>
        </div>
        <div className={styles.aventureSection}>
          <div className={styles.aventureTitle}>
            <h2>AVENTURE</h2>
          </div>
          <div className={styles.aventureContent}>
            <div className={styles.aventureImage}>
              <Image src="/aventure.jpg" alt="About" fill={true} />
            </div>
            <div className={styles.aventureText}>
              <p>
                LA POINTE DES CHATEAUX
                <br />
                DISTANCE : 25KM
                <br />
                Si vous voulez admirer un lever de soleil, c'est l'endroit idéal. 
                <br />
                Attention, le soleil se lève très tôt ici !
              </p>
            </div>
          </div>
        </div>
        <div className={styles.decouverteContainer}>
          <div className={styles.decouverteTitle}>
            <h2>DÉCOUVERTE</h2>
          </div>
          <div className={styles.decouverteContent}>
            <div className={styles.decouverteImage}>
                <Image src="/decouverte.jpg" alt="About" fill={true} />
            </div>
            <div className={styles.decouverteText}>
              <p>
              LA POINTE DES CHATEAUX
              <br />
              DISTANCE : 25KM
              <br />
              Si vous voulez admirer un l ever de soleil, c'est l'endroit idéal. 
              <br />
              Attention, le soleil se lève très tôt ici !
              </p>
            </div>
          </div>
        </div>
        
      </section>
      <section className={styles.contactSection} id="contact">
        <div className={styles.contactContainer}>
          <h2>CONTACTEZ-NOUS</h2>
          <p>
            Nous sommes à votre écoute pour toute question ou demande. Contactez-nous par mail à <a href="mailto:contact@villedeskribean.com">contact@villedeskribean.com</a>
          </p>

          {/* <div className={styles.contactForm}>
            <form>
              <input type="text" placeholder="Nom" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"  />
              <button type="submit" onClick={handleSubmit}>Envoyer</button>
            </form>
          </div>
          */}
        </div>
      </section>
    </div>
  );
}
