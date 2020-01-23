import Link from 'next/link';
import style from '../components/Header.module.css'

const linkStyle = {
  marginRight: 15
}

export default function Header(){
  return (
    <div>
      <Link href="/">
        <a className={style.teste} style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a className={style.teste} style={linkStyle}>About</a>
      </Link>
    </div>
  )
}