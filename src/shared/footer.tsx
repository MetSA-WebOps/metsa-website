import content from '../content/footer.json';


function Footer() {
  return (
    <div className="footer">
      <img src="src/assets/logo_2.png" alt="metsa" style={{ marginLeft: '40px' }} />
      <div >
        <p> Contact Us </p>
        <p> {content.name} </p>
        <p> {content.position}</p>
        <p> {content.organization}</p>
        <p>{content.address}</p>
        <p> {content.mail_1}</p>
        <p>{content.phone}</p>
        <p>{content.mail_2}</p>
      </div>
      <img src="src/assets/iitm_logo.png" alt="iitm" style={{ marginRight: '40px' }} />
    </div>
  );
}

export default Footer;
