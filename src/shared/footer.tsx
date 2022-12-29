import content from '../content/footer.json';


function Footer() {
  return (
    <div className="footer">
      <img src="src/assets/logo_2.png" alt="metsa" style={{ marginLeft: '4%' }} />
      <div >
        <p style={{ fontSize: "20px" }}> Contact Us </p> <br />
        <p> {content.name} </p>
        <p> {content.position}</p>
        <p> {content.organization}</p>
        <p>{content.address}</p>
        <a href={`mailto:${content.mail_1}`} className="mail"> {content.mail_1}</a>
        <p>{content.phone}</p>
        <a href={`mailto:${content.mail_2}`} className="mail"> {content.mail_2}</a>
      </div>
      <img src="src/assets/iitm_logo.png" alt="iitm" style={{ marginRight: '4%' }} />
    </div>
  );
}

export default Footer;
