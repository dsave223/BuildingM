import '../../assets/css/carrusel.css'


function Carrusel() {
    return (
        <div id="captioned-gallery">
          <figure className="slider">
            <figure>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/hobbiton-lake.jpg" alt="" />
              <figcaption>Hobbiton, New Zealand</figcaption>
            </figure>
            <figure>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/wanaka-drowned-tree.jpg" alt="" />
              <figcaption>Wanaka, New Zealand</figcaption>
            </figure>
            <figure>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/utah-peak.jpg" alt="" />
              <figcaption>Utah, United States</figcaption>
            </figure>
            <figure>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/bryce-canyon-utah.jpg" alt="" />
              <figcaption>Bryce Canyon, Utah, United States</figcaption>
            </figure>
            <figure>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/hobbiton-lake.jpg" alt="" />
              <figcaption>Hobbiton, New Zealand</figcaption>
            </figure>
          </figure>
        </div>
      );
}

export default Carrusel;