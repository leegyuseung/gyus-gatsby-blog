import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

interface LogoProps {
  width: string
  height: string
  radius: string
  path: string
}

const Logo = ({ width, height, radius, path }: LogoProps) => {
  return (
    <Link to={path}>
      <StaticImage
        src="../../images/favicon1.png"
        alt="logo"
        style={{
          width: width,
          height: height,
          borderRadius: radius,
          objectFit: 'contain',
        }}
      />
    </Link>
  )
}

export default Logo
