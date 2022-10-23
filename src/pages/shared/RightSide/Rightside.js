import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub,FaFacebook,FaTwitch,FaTwitter,FaWhatsapp,FaDiscord } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Carousal from "../brand/Carousal";
import { AuthContext } from "../../../UserContex/UserContext";
import { GoogleAuthProvider } from "firebase/auth";
const Rightside = () => {
  const {providerLogin} = useContext(AuthContext);
  const provider = new GoogleAuthProvider()
  
  const handleGoogleLogIn =()=>{
    providerLogin(provider)
    .then(result =>{
      const user = result.user;
      console.log(user)
    }).catch(error => console.log(error))
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleLogIn} className="mb-2" variant="outline-primary">
          <FaGoogle /> Log in with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Log in with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on :</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2"> <FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"> <FaTwitch/> Twitch</ListGroup.Item>
          <ListGroup.Item className="mb-2"> <FaTwitter /> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"> <FaWhatsapp/> WhatsApp</ListGroup.Item>
          <ListGroup.Item className="mb-2"> <FaDiscord/> Discord</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Carousal></Carousal>
      </div>
    </div>
  );
};

export default Rightside;
