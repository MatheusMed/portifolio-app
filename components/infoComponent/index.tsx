
import styles from './styles.module.css';

type Props = {
  text: string;
  onTap?: () => void;
}


const InfoComponent = ({ text, onTap }: Props) => {
  return (<div onClick={onTap} >
    <code className={styles.codeInfo}>{text}</code>
  </div>);
}


export default InfoComponent;