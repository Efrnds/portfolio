import style from '../components/contact.module.css'
import Layout from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
            <div className={style.contact}>
                <h2>Entre em contato:</h2>
                <div className={style.card}>
                    <span className={style.imgcard}><Image src="/images/pfp.jpg" width={200} height={200} alt="profile picture" srcset="" /></span>
                    <div className={style.email} >
                        <Link href="mailto:contato.efrnds@outlook.com ">contato.efrnds@outlook.com</Link>
                        <Link href="tel:+55(44)99807-4897 ">(44)99807-4897</Link>
                    </div>
                    <p>Follow-me:</p>
                    <span className={style.socialMedia}>
                        <Link  href="https://www.linkedin.com/in/edudfrs/" target="_blank">
                            <Image src="images/linkedin.svg" width={30} height={30} alt="" />
                        </Link>
                        <Link  href="https://twitter.com/Efrnds__" target="_blank">
                            <Image src="images/twitter.svg" width={30} height={30} alt="" />
                        </Link>
                        <Link  href="https://github.com/Efrnds" target="_blank">
                            <Image src="images/github.svg" width={30} height={30} alt="" />
                        </Link>
                        <Link href="https://wa.me/+5544998074897"
                            target="_blank">
                            <Image src="images/whatsapp.svg" width={30} height={30} alt="" />
                        </Link>
                    </span>
                </div>
            </div>
        </Layout>
    );
}
