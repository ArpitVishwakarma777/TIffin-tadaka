import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUser,
  faLock,
  faEnvelope,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function HeartIcon({ color }) {
  return (
    <FontAwesomeIcon
      style={{ color: color, fontSize: "25px" }}
      icon={faHeart}
    />
  );
}
export function UserIcon() {
  return <FontAwesomeIcon className="mx-auto my-auto" icon={faUser} />;
}

export function EnvelopeIcon() {
  return <FontAwesomeIcon className="mx-auto my-auto" icon={faEnvelope} />;
}

export function LockIcon() {
  return <FontAwesomeIcon className="mx-auto my-auto" icon={faLock} />;
}
export function CrossIcon(props) {
  return (
    <FontAwesomeIcon
      onClick={() => {
        props.setLogin();
      }}
      className="mx-auto my-auto"
      icon={faXmark}
    />
  );
}

export function BagIcon({ color }) {
  return (
    <FontAwesomeIcon
      className=""
      style={{ color: color, fontSize: "25px" }}
      icon={faBagShopping}
    />
  );
}

export default BagIcon;
