import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
      <div className="header">
        <div>
          <h1>Hi, I'm Gerson Lima! 🦾</h1>
          <h2>Software Developer</h2>
        </div>
        <Image
          src="/me.jpg"
          alt="vercel Logo"
          width={325}
          height={310}
          priority
        />  
      </div>
    )
}