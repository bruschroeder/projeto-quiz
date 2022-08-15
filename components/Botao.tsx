import Link from 'next/link'
import styles from '../styles/Botao.module.css'

interface BotaoProps {
    texto: string
    href?: string
    onClick?: (e: any) => void
}

export default function Botao(props: BotaoProps) {
    return props.href ? (
        <Link href={props.href}>
            <button className={styles.botao} onClick={props.onClick}>
                {props.texto}
            </button>
        </Link>
    ) : (
        <button className={styles.botao} onClick={props.onClick}>
            {props.texto}
        </button>
    )
}