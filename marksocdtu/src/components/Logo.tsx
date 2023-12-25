import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
};

const Logo = (props: Props) => {
  return (
    <div className={`flex  ${props.className}`}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>

    </div>
  );
};

export default Logo;
