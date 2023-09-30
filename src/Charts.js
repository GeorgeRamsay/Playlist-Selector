import React from 'react';
import { Link } from 'react-router-dom';

const ButtonWithImage = ({ imageSrc, imageAlt, buttonText, linkTo }) => (
    <Link to={linkTo}>
      <div className="button-container">
        <img src={`images/${imageSrc}`} alt={imageAlt} />
        <button className="main-button">{buttonText}</button>
      </div>
    </Link>
  );
  


function Charts() {
  return (
    <div className="chart-item">
      <h2>Top 100 Songs by Country</h2>
      <div className="chart-buttons">
        <ButtonWithImage
          imageSrc="gb-flag.png"
          imageAlt="UK flag"
          buttonText="UK Chart"
          linkTo="/ituneschart/gb"
        />
        <img src="images/gb-flag.png" alt='a' />

        <ButtonWithImage
          imageSrc="us-flag.webp"
          imageAlt="US flag"
          buttonText="US Chart"
          linkTo="/ituneschart/us"
        />
        <ButtonWithImage
          imageSrc="ca-flag.svg"
          imageAlt="Canada flag"
          buttonText="Canada Chart"
          linkTo="/ituneschart/ca"
        />
        <ButtonWithImage
          imageSrc="nz-flag.png"
          imageAlt="New Zealand flag"
          buttonText="New Zealand Chart"
          linkTo="/ituneschart/nz"
        />
        <ButtonWithImage
          imageSrc="jp-flag.jpg"
          imageAlt="Japan flag"
          buttonText="Japan Chart"
          linkTo="/ituneschart/jp"
        />
        <ButtonWithImage
          imageSrc="mx-flag.webp"
          imageAlt="Mexico flag"
          buttonText="Mexico Chart"
          linkTo="/ituneschart/mx"
        />
        <ButtonWithImage
          imageSrc="de-flag.png"
          imageAlt="Germany flag"
          buttonText="Germany Chart"
          linkTo="/ituneschart/de"
        />
        <ButtonWithImage
          imageSrc="fr-flag.png"
          imageAlt="France flag"
          buttonText="France Chart"
          linkTo="/ituneschart/fr"
        />
        <ButtonWithImage
          imageSrc="es-flag.png"
          imageAlt="Spain flag"
          buttonText="Spain Chart" 
          linkTo="/ituneschart/es" 
        />
      </div>

      {/* Add more buttons for other countries' top 100 charts */}

      {/* Add more buttons for other countries' top 100 charts */}

      <h2>Top 100 Songs by Genre</h2>
      <div className="chart-buttons">
        {/* Add buttons for different genres here */}
        <Link to="/ituneschart/rock">
          <button className="main-button">Rock Music</button>
        </Link>
        <Link to="/ituneschart/childrens">
          <button className="main-button">Childrens music</button>
        </Link>

        <Link to="/ituneschart/classical">
          <button className="main-button">Classical Music</button>
        </Link>
        <Link to="/ituneschart/electronic">
          <button className="main-button">Electronic Music</button>
        </Link>
        <Link to="/ituneschart/holiday">
          <button className="main-button">Holiday Music</button>
        </Link>
        <Link to="/ituneschart/jazz">
          <button className="main-button">Jazz Music</button>
        </Link>
        <Link to="/ituneschart/RandB">
          <button className="main-button">R&B/Soul Music</button>
        </Link>
        <Link to="/ituneschart/dance">
          <button className="main-button">Dance Music</button>
        </Link>


        <Link to="/ituneschart/hiphopandrap">
          <button className="main-button">Hiphop/Rap Music</button>
        </Link>
        <Link to="/ituneschart/alternative">
          <button className="main-button">Alternative Music</button>
        </Link>
        <Link to="/ituneschart/reggae">
          <button className="main-button">Reggae Music</button>
        </Link>
        <Link to="/ituneschart/jpop">
          <button className="main-button">Jpop Music</button>
        </Link>


      </div>
    </div>
  );
}

export default Charts;

